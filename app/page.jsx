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
      <div className="flex flex-col mt-10">
        {getItems && getItems?.map(item => (
          <Items/>
        ))}
      </div>
    </div>
  );
}
