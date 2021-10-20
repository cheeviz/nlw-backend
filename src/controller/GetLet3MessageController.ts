import { Request, Response } from "express";
import { GetLet3MessageService } from "../service/GetLet3MessageService";

class GetLet3MessageController {
  async handle(request: Request, response: Response) {
    const service = new GetLet3MessageService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLet3MessageController };
