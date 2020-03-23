import { HookInterface, HookTypes } from '../types/hook.types';

// hook to check token and write user to request obj
const authHook: HookInterface = {
  type: HookTypes.preHandler,
  handler: (req, _, done) => {
    const user = { name: 'Pavel Valentov', id: '1' };
    req.user = user;

    done();
  },
};

export default authHook;
