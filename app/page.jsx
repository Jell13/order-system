"use client"

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Items from "./components/Items";

export default function Home() {

  const getItems = useQuery(api.menu.getMenu)

  console.log(getItems)

  return (
    <div className="w-full h-full md:px-44 px-12 mt-10">
      <h3 className="text-3xl">
        Menu
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {getItems && getItems?.map(item => (
          <Items key={item.id} name={item.name} price={item.price} image={item.imageUrl}/>
        ))}
      </div>
    </div>
  );
}
