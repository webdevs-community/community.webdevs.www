import {z} from "astro:content";

export default {
  schema: z.object({
    title: z.string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    }),
    position: z
      .string({
        required_error: "position is required",
        invalid_type_error: "position must be a string",
      }),
    avatar: z.string({
      required_error: "avatar is required",
      invalid_type_error: "avatar must be a string",
    }),
    description: z
      .string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
      }),
    topics: z.array(
      z.string({
        required_error: "topics is required",
        invalid_type_error: "topics must be a string",
      })
    ).optional(),
    links: z.array(
      z.object({
        title: z.string({
          required_error: "title is required",
          invalid_type_error: "title must be a string",
        }),
        link: z.string({
          required_error: "link is required",
          invalid_type_error: "link must be a string",
        }),
      })
    ).optional(),
  }),
};
