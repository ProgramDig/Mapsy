import bcrypt from "bcrypt";

import UserModel from "../models/user.model.js";
import RoleModel from "../models/role.model.js";

import TokenService from "./token.service.js";
import UserDtoService from "./userDto.service.js";

import { LoginData, User, UserDTO, UserId } from "../types/main.js";
import { ProcessEnv } from "../interfaces/main.js";

class UserService {
  // registration user in db
  async registrationOneUser(values: User) {
    try {
      const { login, email, role, password, secondName, firstName } = values;
      const candidateEmail: User | null = await UserModel.findOne({ email });
      const candidateLogin: User | null = await UserModel.findOne({ login });
      if (candidateEmail || candidateLogin) throw new Error("Користувач з таким логіном або паролем вже створений.");
      const { SALT }: ProcessEnv = process.env;
      let hashPassword: string;
      if (SALT !== undefined) {
        hashPassword = await bcrypt.hash(password, 7);
      } else {
        throw new Error("SALT не вказана.");
      }
      const { value } = new RoleModel({ value: role });
      const user = new UserModel({ email, login, firstName, secondName, password: hashPassword, role: value });
      await user.save();
    } catch (error) {
      throw new Error(`Помилка реєстрації користувача. ${error}`);
    }
  }
  // login user in app
  async loginOneUser(values: LoginData) {
    try {
      const {logIdent, password} = values;
      const user: User | null = await UserModel.findOne(logIdent.includes("@")? {email: logIdent} : {login: logIdent});
      if(!user) throw new Error(`Такого користувача ${logIdent} не існує.`);
      const validationPass: boolean = await bcrypt.compare(password, user.password);
      if(!validationPass) throw new Error("Введений невірний пароль");
      const token = TokenService.generateAccessToken(user._id, user.role);
      const userDto = UserDtoService.toUserDto(user);
      return { token, user: userDto };
    } catch (error) {
      throw new Error(`Помилка логіну користувача. ${error}`);
    }
  }
  // update user data
  async updateOneUser(values: UserDTO) {
    try {
      const user = await UserModel.findOne({_id: values._id});
      if(!user) throw new Error("Такого корисутвача не існує");
      delete values._id;
      return await UserModel.updateOne({_id: user._id}, {...values});
    } catch (error) {
      throw new Error(`Помилка оновлення даних користувача. ${error}`);
    }
  }
  // get users
  async getAllUser() {
    try {
      const users: User[] = await UserModel.find();
      return users;
    } catch (error) {
      throw new Error(`Помилка отримання списку користувача. ${error}`);
    }
  }
  // delete user from db
  async deleteOneUser({ _id }: UserId) {
    try {
      const user = await UserModel.findOne({_id});
      if(!user) throw new Error("Такого корисутвача не існує");
      return await UserModel.deleteOne({_id} );
    } catch (error) {
      throw new Error(`Помилка видалення користувача. ${error}`);
    }
  }
}

export default new UserService();