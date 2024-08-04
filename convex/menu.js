import { query } from "./_generated/server";
import { v } from "convex/values";

export const getMenu = query({
    args:{},
    handler: async (ctx) => {
        
        const menuItems = await ctx.db.query('menu').collect()

        return menuItems
    }
})

export const getMenuId = query({
    args:{
        id: v.id("menu")
    },
    handler: async (ctx, args) => {
        
        const getId = await ctx.db.get(args.id)
        console.log(getId)
        return getId
    }
})