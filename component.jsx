/**
 * v0 by Vercel.
 * @see https://v0.dev/t/53s5D4jEqRY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md bg-[#33343f] text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription className="text-white">
            Ingresa tu correo electrónico para iniciar sesión en tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white" htmlFor="email">
              Correo electrónico
            </Label>
            <Input
              className="bg-[#33343f] border-[#5f6070] text-white focus:border-[#72de80] focus:ring-[#72de80]"
              placeholder="example@email.com"
              required
              type="email"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full rounded-md bg-[#72de80] hover:bg-[#5dc66a] focus:ring-[#72de80] text-[#33343f]"
            type="submit"
          >
            Iniciar sesión
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
