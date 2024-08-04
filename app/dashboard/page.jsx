"use client"

import { api } from "@/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import Orders from "../components/Orders"
import { useState } from "react"
import { toast } from "sonner"

const page = () => {

    const orders = useQuery(api.cart.getOrders)
    const changeCondition = useMutation(api.cart.changeOrder)
    const[earning, totalEarning] = useState(0)

    const handleClick = async (id, total) => {
      toast("Total Added")
      totalEarning(earning + total)
      changeCondition({
        id: id
      })
    }

  return (
    <div className='w-full h-full md:px-44 px-12'>
      <h4 className='text-3xl mt-10'>Dashboard</h4>
      <h4 className="mt-8 text-2xl">Total Earning: ${earning}</h4>
      <div className="mt-10">
        {orders && orders?.map(({_id,name, total, items,done},index) => (
            <>
                {!done && (
                  <>
                    <Orders key={index} name={name} total={total} items={items} id={_id} handler={handleClick}/>
                    <div className="border-2 border-b-black mb-8"/>
                  </>
                )}
            </>
        ))}
      </div>
    </div>
  )
}

export default page
