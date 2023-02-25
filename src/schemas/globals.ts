import {z} from "astro:content";

export default {
  schema: z.object({
    title: z.string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    }),
    description: z
      .string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
      }),
  }),
};
