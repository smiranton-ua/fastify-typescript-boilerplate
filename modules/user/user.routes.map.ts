import { getUserInfoController } from './user.controllers';
import userSchemasMap from './user.routes.schemas'
import ApiMethods from "../../constants/methodsMap";

const userRoutesMap = {
  getUserInfo: {
    url: '/user/:id',
    method: ApiMethods.get,
    controller: getUserInfoController,
    options: {
      schema: userSchemasMap.getUserInfo,
    },
  }
};

export default userRoutesMap;
