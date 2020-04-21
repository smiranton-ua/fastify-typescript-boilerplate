import { RequestType, ReplyType } from '../../types';

export type StatsdClientType = any;

export interface TagsType {
  [key: string]: string | number;
}

export interface StatsHookPayloadType {
  name: string;
  client: StatsdClientType;
}

export interface StatsHookRequestType extends RequestType {
  startAt: Date | string | number | null | undefined;
}

export interface StatsHookReplyType extends ReplyType {
  startAt: Date | string | number | null | undefined;
}
