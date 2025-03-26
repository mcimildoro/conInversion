import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="text-2xl font-bold text-green-600">
        <Image src="/assets/logo2.png" alt="ConInversión Logo" width={260} height={50} />
      </div>
    </Link>
  )
}

