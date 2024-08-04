import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const makeOrders = mutation({
    args:{
        name: v.string(),
        items: v.array(v.object({"item": v.string(), "price": v.float64(), "image": v.string()})),
        total: v.float64(),
    },
    handler: async (ctx, args) => {

        await ctx.db.insert("cart", {
            name: args.name,
            items: args.items,
            total: args.total,
            done: false
        })
    }
})

export const changeOrder = mutation({
    args:{
        id: v.id("cart")
    },
    handler: async (ctx, args) => {
        
        const order = await ctx.db.patch(args.id,{
            done: true
        })
    }
})

export const getOrders = query({
    args:{},
    handler: async (ctx) => {

        const allOrders = await ctx.db.query("cart").collect()
        console.log(allOrders)

        return allOrders
    }
})