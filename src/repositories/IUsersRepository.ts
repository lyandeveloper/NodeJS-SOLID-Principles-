import { User } from '../entities/User';

export interface IUsersRepository {
  findbyEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
