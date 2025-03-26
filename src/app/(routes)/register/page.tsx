import { RegisterForm } from "@/components/auth/register-form"
import TransitionPage from "@/components/TransitionPage/transition-page"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <TransitionPage />
      <div className="mb-8">
      </div>
      <RegisterForm />
    </div>
  )
}

