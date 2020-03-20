import hookTypes  from "../constants/hookTypes";
import HookInterface from "./hook.interface";

// hook to check token and write user to request obj
const authHook: HookInterface = {
  type: hookTypes.preHandler as any,
  handler: (req, res, done) => {
    const user = {name: 'Pavel Valentov', id: '1'};
    req.user = user;

    done();
  }
};

export default authHook;
