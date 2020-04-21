import { RequestType, ReplyType, LoggerType } from '../../types/server.types';
import { MarketsService } from '../markets';

class MarketsController {
  constructor(
    private readonly logger: LoggerType,
    private readonly service: MarketsService
  ) {
    logger.info(`Created Markets controller`);
  }

  public test = async (request: RequestType, reply: ReplyType) => {
    reply.code(200).send({ message: 'test' });
  };
}

export default MarketsController;
