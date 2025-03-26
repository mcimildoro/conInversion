"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  isUser: boolean
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Asesor Financiero",
      content: "Hola, ¿en qué puedo ayudarte hoy?",
      timestamp: "10:30 AM",
      isUser: false,
    },
    {
      id: 2,
      sender: "Tú",
      content: "Estoy interesado en invertir en tecnología. ¿Qué me recomiendas?",
      timestamp: "10:32 AM",
      isUser: true,
    },
    {
      id: 3,
      sender: "Asesor Financiero",
      content:
        "Excelente elección. El sector tecnológico tiene buenas perspectivas. Te recomendaría revisar las oportunidades que tenemos en empresas como Apple, Microsoft y Google.",
      timestamp: "10:35 AM",
      isUser: false,
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim() === "") return

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "Tú",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isUser: true,
    }

    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simular respuesta del asesor
    setTimeout(() => {
      const advisorMessage: Message = {
        id: messages.length + 2,
        sender: "Asesor Financiero",
        content: "Gracias por tu mensaje. Un asesor te responderá pronto.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isUser: false,
      }
      setMessages((prev) => [...prev, advisorMessage])
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mensajes</h1>
        <p className="text-muted-foreground">Comunícate con nuestros asesores financieros.</p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Chat con Asesor</CardTitle>
          <CardDescription>Nuestros asesores están disponibles para responder tus consultas.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[400px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`flex max-w-[80%] ${message.isUser ? "flex-row-reverse" : "flex-row"}`}>
                    <Avatar className={`h-8 w-8 ${message.isUser ? "ml-2" : "mr-2"}`}>
                      <AvatarImage src="" />
                      <AvatarFallback>{message.isUser ? "TÚ" : "AF"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t flex gap-2">
            <Input
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage()
                }
              }}
            />
            <Button onClick={sendMessage}>Enviar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

