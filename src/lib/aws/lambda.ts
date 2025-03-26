// Este archivo contiene la configuración para AWS Lambda

import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import type { NextApiRequest, NextApiResponse as OriginalNextApiResponse } from "next"

interface NextApiResponse extends OriginalNextApiResponse {
  body?: any;
}

// Función para convertir un evento de API Gateway a un objeto NextApiRequest
export function apiGatewayEventToNextApiRequest(event: APIGatewayProxyEvent): NextApiRequest {
  const { path, httpMethod, headers, queryStringParameters, body } = event

  // Crear un objeto similar a NextApiRequest
  const req = {
    url: path,
    method: httpMethod,
    headers: new Headers(headers as any),
    query: queryStringParameters || {},
    body: body ? JSON.parse(body) : {},
  } as unknown as NextApiRequest

  return req
}

// Función para convertir un NextApiResponse a un resultado de API Gateway
export function nextApiResponseToApiGatewayResult(res: NextApiResponse): APIGatewayProxyResult {
  return {
    statusCode: res.statusCode || 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(res.body || {}),
  }
}

// Función para manejar las solicitudes de API Gateway
export function createLambdaHandler(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) {
  return async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const req = apiGatewayEventToNextApiRequest(event)
    const res = {} as NextApiResponse

    try {
      await handler(req, res)
      return nextApiResponseToApiGatewayResult(res)
    } catch (error) {
      console.error("Error en el handler de Lambda:", error)
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ error: "Error interno del servidor" }),
      }
    }
  }
}

