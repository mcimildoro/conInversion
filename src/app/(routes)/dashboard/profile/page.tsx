import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth/session"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ProfilePage() {
  // Obtener el usuario de forma asíncrona
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
        <p className="text-muted-foreground">Gestiona tu información personal y preferencias de cuenta.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información personal</CardTitle>
          <CardDescription>Actualiza tu información personal y datos de contacto.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium">Nombre</div>
                <div className="text-sm text-muted-foreground">
                  {user.user_metadata?.first_name || "No especificado"}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Apellido</div>
                <div className="text-sm text-muted-foreground">
                  {user.user_metadata?.last_name || "No especificado"}
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">Correo electrónico</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
            <div>
              <div className="text-sm font-medium">Nombre de usuario</div>
              <div className="text-sm text-muted-foreground">{user.user_metadata?.username || "No especificado"}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

