import { string, z } from "zod";

export const userSchema = z
.object({
  name: z
    .string({
      required_error: "name is required!",
      invalid_type_error: "name must be a string!",
    })
    .min(3, "name must have at least 3 characters!")
    .max(255, "max name lenght exceeded!"),

  email: z
  . string({
    required_error: "name is required!",
    invalid_type_error: "name must be a string!",
  })
    .email("email poorly formated")
    .max(255, "max email length exceeded!"),
  password: string({
    required_error: "name is required!",
    invalid_type_error: "name must be a string!",
  })
    .min(7, "password must have at least 7 characters")
    .max(255, "max password lenght exceeded!")
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
      message:
        "the password must contain at least one capital letter, one number and one special character!",
    }),
})
.strict();

  export type UserDataTypes = z.infer<typeof userSchema>;