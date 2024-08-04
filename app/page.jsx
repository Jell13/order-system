"use client"

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import Items from "./components/Items";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const getItems = useQuery(api.menu.getMenu)
  const makeCart = useMutation(api.cart.makeCart)

  const[cart, setCart] = useState([])
  const[name, setName] = useState("")
  const[total, setTotal] = useState(0)

  const router = useRouter()

  const addItem = async(item,price) => {
    setCart([...cart, {item,price}])
    setTotal(total + price)
  }

  const removeHandler = async (index,price) => {
    setCart(cart.filter((_,i) => i !== index))
    setTotal(total - price)
  }

  const handleSubmit = async () => {
    makeCart({
      name: name,
      items: cart,
      total: total
    })
    router.push("/thankyou")
  }

  return (
    <div className="w-full h-full md:px-44 px-12 py-10 pb-10">
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl">
          Name for your order
        </h3>
        <input required value={name} onChange={(e) => setName(e.target.value)} className="border-none outline-none py-1 rounded-full px-4" type="text" />
      </div>
      <h3 className="text-3xl mt-10">
        Menu
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {getItems && getItems?.map(item => (
          <Items key={item.id} id={item.id} name={item.name} price={item.price} image={item.imageUrl} addItem={addItem}/>
        ))}
      </div>
      <div className="flex flex-col gap-8 mt-10">
        <h3 className="text-3xl">Cart</h3>
        <div className="flex flex-col bg-[#EFE5DC] px-2 py-2 rounded-xl gap-4 text-xl">
          <p>Order name: {name}</p>
          <p>items:</p>
          {cart.map(({item,price},index) => (
            <div key={index} className="flex justify-between">
              <p>{item}</p>
              <button onClick={() => removeHandler(index,price)} className="bg-red-500 rounded-full p-1">
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
        <p className="text-2xl">Total: ${total}</p>
      </div>
      <button onClick={() => handleSubmit()} type="submit" className="bg-[#EFE5DC] text-3xl px-4 py-1 rounded-xl mt-10">ORDER</button>
    </div>
  );
}
