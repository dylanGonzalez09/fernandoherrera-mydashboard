"use client"
import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCalculator } from "react-icons/io5"

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={count.toString()}
        href="/dashboard/counter"
        subtitle="Articulos en el carrito"
        icon={<IoCalculator size={40} />}
      />
    </div>
  )
}
