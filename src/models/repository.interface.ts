import {User} from "./user.interface";

export interface RepositoryInterface {
  name: string,
  description: string,
  owner: User
}
