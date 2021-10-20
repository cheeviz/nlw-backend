import { Request, Response } from "express";
import { AutheticateUserService } from "../service/AuthenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const service = new AutheticateUserService();
    const result = service.execute(code);

    return res.json(result);
  }
}

export { AuthenticateUserController };
