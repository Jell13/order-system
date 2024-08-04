import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    menu: defineTable({
        name: v.string(),
        price: v.float64(),
        imageUrl: v.string()
    }).index("by_name", ["name"]),
    cart: defineTable({
        name: v.string(),
        items: v.array(v.object({"item": v.string(), "price": v.float64(), "image": v.string()})),
        total: v.float64(),
        done: v.boolean()
    }).index("by_name", ["name"])
})