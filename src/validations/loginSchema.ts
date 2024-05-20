import { string, z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({
        required_error: "name is required!",
        invalid_type_error: "name must be a string!",
      })
      .email("email poorly formated")
      .max(255, "max email length exceeded!"),

    password: z
     .string({
      required_error: "name is required!",
      invalid_type_error: "name must be a string!",
    })
      .max(225, "max password lenght exceeded!"),
  })
  .strict();

export type LoginDataTypes = z.infer<typeof loginSchema>;
