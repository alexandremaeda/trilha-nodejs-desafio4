import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

// https://stackoverflow.com/questions/64113430/how-extends-correctly-the-headers-of-request-in-typescript
interface ICustomHeaders {
  user_id: string;
}

interface IReqCustom<THeader> extends Request {
  headers: IncomingHttpHeaders & THeader;
}

// https://javascript.plainenglish.io/how-to-create-custom-headers-with-express-and-typescript-b964d3f0be89
interface ICustomRequest extends Request {
  headers: IncomingHttpHeaders & {
    user_id?: string;
  };
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  // handle(request: IReqCustom<ICustomHeaders>, response: Response): Response {
  handle(request: ICustomRequest, response: Response): Response {
    const { user_id } = request.headers;

    const foundUsers = this.listAllUsersUseCase.execute({ user_id });

    return response.send(foundUsers);
  }
}

export { ListAllUsersController };
