import { z } from "astro:content";

export default {
  schema: z.object({
    title: z.string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    }),
    portions: z
      .number({
        required_error: "portions is required",
        invalid_type_error: "portions must be a number",
      })
      .positive({ message: "portions must be greater then 0" })
      .default(2),
    ingredients: z.array(
      z.object({
        name: z.string({
          required_error: "name is required",
          invalid_type_error: "name must be a string",
        }),
        quantity: z
          .number({
            required_error: "quantity is required",
            invalid_type_error: "quantity must be a number",
          })
          .positive({ message: "quantity must be greater then 0" }),
        unit: z.enum(["g", "kg", "ml", "l", "tbsp", "tsp", "pcs"]),
        note: z
          .string({
            invalid_type_error: "note must be a string",
          })
          .optional(),
      })
    ),
    spices: z
      .array(
        z.object({
          name: z.string({
            required_error: "name is required",
            invalid_type_error: "name must be a string",
          }),
          note: z
            .string({
              invalid_type_error: "note must be a string",
            })
            .optional(),
        })
      )
      .optional(),
  }),
};
