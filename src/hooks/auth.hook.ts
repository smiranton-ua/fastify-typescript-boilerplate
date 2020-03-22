import HookInterface from './hook.interface';

import HOOK_TYPES  from '../constants/hookTypes';

// hook to check token and write user to request obj
const authHook: HookInterface = {
  type: HOOK_TYPES.preHandler,
  handler: (req, _, done) => {
    const user = { name: 'Pavel Valentov', id: '1' };
    req.user = user;

    done();
  }
};

export default authHook;
