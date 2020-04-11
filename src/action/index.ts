export interface Action<
  TType extends string = string,
  TPayload = any,
  TMeta = any
> {
  type: TType;
  payload: TPayload;
  meta?: TMeta;
  error?: true;
}

export interface ErrorAction<
  TMeta = any
  > extends Action<'dugout/error', string, TMeta> {
  error: true;
}


export type StoredAction<
  TType extends string = string,
  TPayload = any
> = Action<TType, TPayload, {
  eventId: number;
  ts: number;
  userId: number;
}>;

export type UserJoinedAction = Action<
  'dugout/user-joined',
  {
    userId: string;
  }
>;

export type UserLeftAction = Action<
  'dugout/user-left',
  {
    userId: string;
  }
>;

export type UserNickAction = Action<
  'dugout/user-nick',
  {
    userId: string;
    nick: string;
  }
>;


export type DebugAction = Action<
  'dugout/user-debug',
  {
    message: any;
  }
>;

export function isAction(action: any): action is Action {

  return typeof action.type === 'string' && 'payload' in action;

}
export function assertAction(action: any): asserts action is Action {

  if (!isAction(action)) {
    throw new Error('Actions must have a "type" and "payload" property');
  }

}
