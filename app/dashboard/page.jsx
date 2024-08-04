"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Orders from "../components/Orders"

const page = () => {

    const orders = useQuery(api.cart.getOrders)

  return (
    <div className='w-full h-full md:px-44 px-12'>
      <h4 className='text-3xl mt-10'>Dashboard</h4>
      <div className="mt-10">
        {orders && orders?.map(({name, total, items},index) => (
            <>
                <Orders key={index} name={name} total={total} items={items}/>
                <div className="border-2 border-b-black mb-8"/>
            </>
        ))}
      </div>
    </div>
  )
}

export default page
