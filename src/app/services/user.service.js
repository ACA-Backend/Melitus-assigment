import {User} from "../models/user.model.js";
import { ConflictError, NotFoundError, UnauthenticatedError, UnauthorizedError } from "../../lib/error-definitions.js";


 export class UserService {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw new UnauthenticatedError("Error creating user: " + error.message);
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new NotFoundError("User not found");
      }
      return user;
    } catch (error) {
      throw new ConflictError ("Error fetching user: " + error.message);
    }
  }

  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new UnauthorizedError ("Error fetching users: " + error.message);
    }
  }

  async updateUser(id, data) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new NotFoundError ("User not found");
      }
      await user.update(data);
      return user;
    } catch (error) {
      throw new ConflictError ("Error updating user: " + error.message);
    }
  }

  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new NotFoundError("User not found");
      }
      await user.destroy();
      return { message: "User deleted successfully" };
    } catch (error) {
      throw new ConflictError("User can not be deleted: " + error.message);
    }
  }
}












// import { ConflictError } from "../../lib/error-definitions.js";
// import { User } from "../schema/user.schema.js";

// export const createUser = async (payload) => {
//   // check if a record already exists with the user details
//   const user = await User.findOne({
//     $or: [{ email: payload.email }, { username: payload.username }],
//   });

//   // if the user exists, throw an error that the user record exists
//   if (user)
//     throw new ConflictError("A user with the provided details already exists");

//   // create a new user record
//   return await User.create(payload);
// };

// export const getUser = async (id) => {
//   return await User.findById(id);
// };

// export const getUserByEmail = async (email) => {
//   return await User.findOne({ email });
// };

// export const getUserByRole = async (role) => {
//   return await User.find({ role });
// };

// export const deleteUsers = async (role) => {
//   await User.deleteMany(role);
// };
