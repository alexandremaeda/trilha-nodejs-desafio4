import { v4 as uuidV4 } from "uuid";

interface IUser {
  name: string;
  email: string;
}

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor({ name, email }: IUser) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.email = email;
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
