import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const makeCart = mutation({
    args:{
        name: v.string(),
        items: v.array(v.object({"item": v.string(), "price": v.float64()})),
        total: v.float64()
    },
    handler: async (ctx, args) => {

        await ctx.db.insert("cart", {
            name: args.name,
            items: args.items,
            total: args.total
        })
    }
})