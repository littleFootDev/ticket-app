import { Context } from "koa";
// import JWT from "jsonwebtoken";
import HTTP_STATUS from "http-status-codes";
import { UserModel } from "../../models/user/User.model";
import { firstLetterUppercase } from "../../helpers/helpers";

export class Auth {
  public async create(ctx: Context): Promise<void> {
    try {
      const { username, password, role } = ctx.request.body;
      const user = await UserModel.findOne({
        username: firstLetterUppercase(username),
      });
      if (user) {
        ctx.response.status = HTTP_STATUS.CONFLICT;
        ctx.body = { message: "Username already exist" };
      } else {
        const body = {
          username: firstLetterUppercase(username),
          password,
          role,
        };
        const createUser = await UserModel.create(body);
        ctx.body = createUser;
      }
    } catch (error) {
      console.log(error);
      ctx.body = error;
    }
  }
}
