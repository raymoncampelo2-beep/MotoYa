"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState("¡Bienvenido!")

  const cambiarMensaje = () => {
    const mensajes = [
      "¡Excelente trabajo! 🎉",
      "¡Vercel es increíble! ⚡",
      "¡Tu app funciona perfectamente! ✨",
      "¡Eres un desarrollador! 👨‍💻",
      "¡Sigue así! 🚀",
    ]
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)]
    setMensaje(mensajeAleatorio)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">🚀 Mi Primera App en Vercel</h1>
          <p className="text-xl text-gray-600 mb-2">¡Funcionando perfectamente desde la nube!</p>
          <p className="text-lg text-purple-600 font-medium">{mensaje}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                Estado del Deploy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Estado:</span>
                  <span className="font-bold text-green-600">✅ En línea</span>
                </div>
                <div className="flex justify-between">
                  <span>Velocidad:</span>
                  <span className="font-bold text-blue-600">⚡ Ultra rápida</span>
                </div>
                <div className="flex justify-between">
                  <span>Seguridad:</span>
                  <span className="font-bold text-purple-600">🔒 HTTPS</span>
                </div>
                <div className="flex justify-between">
                  <span>Deploy:</span>
                  <span className="font-bold text-orange-600">🔄 Automático</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Contador Interactivo</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">{contador}</div>
              <div className="space-x-2">
                <Button
                  onClick={() => setContador(contador - 1)}
                  variant="outline"
                  className="bg-red-100 hover:bg-red-200"
                >
                  -1
                </Button>
                <Button onClick={() => setContador(contador + 1)} className="bg-blue-500 hover:bg-blue-600">
                  +1
                </Button>
                <Button onClick={() => setContador(0)} variant="outline" className="bg-gray-100 hover:bg-gray-200">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">Información Técnica</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-bold">React 18</div>
                <div className="text-sm text-gray-600">Framework frontend</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🔺</div>
                <div className="font-bold">Next.js 14</div>
                <div className="text-sm text-gray-600">Framework fullstack</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-bold">Tailwind CSS</div>
                <div className="text-sm text-gray-600">Estilos modernos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={cambiarMensaje}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg"
          >
            🎲 Cambiar Mensaje
          </Button>
        </div>

        <div className="text-center text-gray-500 text-sm border-t pt-6">
          <p>Creado con ❤️ usando Next.js, React y Vercel</p>
          <p className="mt-2">¡Tu primera aplicación web moderna está funcionando! 🎉</p>
        </div>
      </div>
    </div>
  )
}
