"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import type { User, Session } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signOut: async () => {},
})

export function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadSession() {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error("Error al cargar la sesión:", error)
          return
        }

        setSession(data.session)
        setUser(data.session?.user || null)
      } catch (error) {
        console.error("Error al cargar la sesión:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadSession()

    const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
      console.log("Evento de autenticación:", event)
      setSession(newSession)
      setUser(newSession?.user || null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return <AuthContext.Provider value={{ user, session, isLoading, signOut }}>{children}</AuthContext.Provider>
}

export function useClientAuth() {
  return useContext(AuthContext)
}

