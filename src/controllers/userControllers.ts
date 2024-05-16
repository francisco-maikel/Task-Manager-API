import { Request, NextFunction, Response } from "express";
import { string, z } from "zod";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z.object({
        name: z
          .string({
            required_error: "name is required!",
            invalid_type_error: "name must be a string!",
          })
          .min(3, "name must have at least 3 characters!")
          .max(255, "max name lenght exceeded!"),

        email: string({
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
          .max(255, "max password lenght exceeded!"),
      });

      const { name, email, password } = userSchema.parse(req.body);

      return res.status(201).json({ message: "User created!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },
};