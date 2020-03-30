import { HookInterface, ReqResHookTypes } from '../types/hook.types';

// hook to check token and write user to request obj
const authHook = {
  type: ReqResHookTypes.preHandler,
  handler: (req, res, done) => {
    const user = { name: 'TestUser', id: '1' };

    req.user = user;

    done();
  },
};

export default authHook as HookInterface;
