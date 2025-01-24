import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

// user from patient form 
export const createUser = async (user: CreateUserParams) => {
  console.log('create user function');
  console.log(users);
  

    try {
      const newUser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        undefined,
        user.name
      );
  
      console.log('new user');
      console.log(newUser);
      
    //   return parseStringify(newuser);
    } catch (error: any) {
      // Check existing user
      if (error && error?.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);
  
        return existingUser.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
  };

export const registerPatient = async ({IdentificationDocument, ...patient}: RegisterUserparams) =>{
  
}