import { LoginForm } from "@/components/auth/login-form"
import TransitionPage from "@/components/TransitionPage/transition-page"


export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <TransitionPage />
      <div className="mb-8">
       
      </div>
      <LoginForm />
    </div>
  )
}

