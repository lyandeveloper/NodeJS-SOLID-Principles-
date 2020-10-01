import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersReposiitory = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersReposiitory,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
