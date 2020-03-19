import { Request, Response } from "express-serve-static-core";

class UserController {
    public async get(req:Request, res: Response): Promise<Response>{
        return res.send("testando controller again s");
    }
}
export default new  UserController;