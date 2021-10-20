import { Request, Response } from "express";
import { CreateUserUserCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private crateUserUserCase: CreateUserUserCase,
    ){};
    
    async hangle(request: Request, response: Response): Promise<Response> {
        const { name, email, password} = request.body;

        try {
            await this.crateUserUserCase.execute({
                name,
                email,
                password,
            })

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}