import { CartCounter } from "@/shoping-cart"

export const metadata = {
  title: "shopping  cart",
  description: "Un simple contador",
}

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={20} />
    </div>
  )
}
