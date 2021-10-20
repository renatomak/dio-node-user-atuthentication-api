import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUserCase {
    constructor(
       private usersRepository: IUsersRepository,
       private mailProvider: IMailProvider,
    ){ };

    async execute(data: ICreateUserRequestDTO) {
      const userAlradyExists = await this.usersRepository.findByEmail(data.email);

      if (userAlradyExists) {
          throw new Error('User alredy exists.');
      }

      const user = new User(data);

      await this.usersRepository.save(user);
      this.mailProvider.sendMail({
          to: {
              name: data.name,
              email: data.email,
          },
          from: {
              name: "Equipe do Meu app",
              email: "equip@meuapp.com",
          },
          subject: "Seja bem vindo à plataforma",
          body: '<p>Você já pode fazer login em nossa plataforma.</p>'
      })
    }
}