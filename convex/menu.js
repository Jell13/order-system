import { query } from "./_generated/server";
import { v } from "convex/values";

export const getMenu = query({
    args:{},
    handler: async (ctx) => {
        
        const menuItems = await ctx.db.query('menu').collect()
        console.log(menuItems)

        return menuItems
    }
})