ConInversión

Aplicación web desarrollada con Next.js (App Router) y Supabase Auth, diseñada para permitir a los usuarios registrarse, iniciar sesión y acceder a un panel personalizado.

👁‍🗨️ Tech Stack

Next.js (App Router)

React + Tailwind CSS

Supabase (Auth + DB)

TypeScript

Vercel (Deploy)

✨ Cómo iniciar el proyecto

Clona el repositorio:

git clone https://github.com/tu-usuario/coninversion.git
cd coninversion

Instala las dependencias:

npm install

Crea un archivo .env en la raíz con tus claves de Supabase:

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

Inicia el servidor de desarrollo:

npm run dev

🛠️ Migración a @supabase/ssr

Antes usábamos @supabase/auth-helpers-nextjs, pero fue deprecado. Migramos a @supabase/ssr siguiendo los pasos:

Reemplazamos createServerComponentClient por createServerClient.

Creamos un archivo server-client.ts con:

// lib/supabase/server-client.ts
import { createServerClient } from "@supabase/ssr"
import { cookies as getCookies } from "next/headers"

export const createServerSupabaseClient = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async getAll() {
          const cookieStore = await getCookies()
          return cookieStore.getAll()
        },
        async setAll(cookiesToSet) {
          const cookieStore = await getCookies()
          cookiesToSet.forEach(({ name, value }) => {
            cookieStore.set(name, value)
          })
        },
      },
    }
  )
}

Eliminamos el middleware.ts que ya no era necesario.

Confirmamos que la sesión se persiste correctamente en local y en producción.

🚚 Deploy

Este proyecto está desplegado en Vercel:

🔗 https://con-inversion.vercel.app

📁 Estructura destacada

src/
├── app/                  → App Router pages y layouts
├── components/           → Componentes reutilizables (UI, dashboard)
├── lib/
│   ├── auth/             → getSession y getCurrentUser
│   └── supabase/         → client.ts y server-client.ts (Supabase SSR)
├── styles/               → Tailwind y globales

📖 Recursos

Next.js App Router Docs

Supabase SSR Docs

