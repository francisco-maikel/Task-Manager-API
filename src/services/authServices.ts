import { compare } from "bcrypt";
import { appError } from "../errors/appError";
import { UserDataCreate } from "../repositories/userRepository";
import { LoginDataTypes } from "../validations/loginSchema";

type repository = {
  getUserByEmail(email: string): Promise<UserDataCreate | undefined>;
};

export const authServices = {
  async login(data: LoginDataTypes, repository: repository) {
    try {
      const { email, password } = data;

      const user = await repository.getUserByEmail(email);
      if (!user) throw appError("email or password invalid!", 401);


      const passwordCheck = await compare(password, user. password);
      if (!passwordCheck) throw appError("password invalid!", 401);

    } catch (error) {
      throw error;
    }
  },
};