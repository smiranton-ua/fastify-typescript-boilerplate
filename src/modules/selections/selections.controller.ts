import { RequestType, ReplyType, LoggerType } from '../../types/server.types';
import { SelectionsService } from '../selections';

class SelectionsController {
  constructor(
    private readonly logger: LoggerType,
    private readonly service: SelectionsService
  ) {
    logger.info(`Created Selections controller`);
  }

  public test = async (request: RequestType, reply: ReplyType) => {
    reply.code(200).send({ message: 'test' });
  };
}

export default SelectionsController;
