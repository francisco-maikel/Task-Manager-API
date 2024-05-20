import { hash } from "bcrypt";
import { randomUUID } from "node:crypto";
import { UserDataCreate } from "../repositories/userRepository";

type UserData = {
  name: string;
  email: string;
  password: string;
};

type repository = {
  createUser(data: UserDataCreate): Promise<{ id: string } | undefined>;
};

export const userServices = {
  async create(data: UserData, repository: repository) {
    try {
      const { name, email, password } = data;

      const passwordHash = await hash(password, 10);

      const user = {
        id: randomUUID(),
        name,
        email,
        password: passwordHash,
      };

      const userCreate = await repository.createUser(user);

      return userCreate;
    } catch (error) {
      throw error;
    }
  },
};
