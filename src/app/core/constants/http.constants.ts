export enum CONTENT_TYPE {
  JSON = 'application/json',
  TEXT_CSV = 'text/csv',
  TEXT_EVENT_STREAM = 'text/event-stream',
  ALL = '*/*',
}

export enum RESPONSE_OBSERVE {
  BODY = 'body',
  EVENTS = 'events',
  RESPONSE = 'response',
}

export enum RESPONSE_TYPE {
  JSON = 'json',
  ARRAY_BUFFER = 'arraybuffer',
  TEXT = 'text',
  BLOB = 'blob',
}

export enum HTTP_HEADERS {
  CONTENT_TYPE = 'Content-Type',
  ACCEPT_LANGUAGE = 'Accept-Language',
  AUTHORIZATION = 'Authorization',
  ACCEPT = 'Accept',
}

export enum HTTP_CODES {
  OK = 200,
  NOT_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTABLE = 406,
  CONFLICT = 409,
}

export const HTTP_ERROR_CODES = {
  [HTTP_CODES.BAD_REQUEST]: HTTP_CODES.BAD_REQUEST,
  [HTTP_CODES.UNAUTHORIZED]: HTTP_CODES.UNAUTHORIZED,
  [HTTP_CODES.FORBIDDEN]: HTTP_CODES.FORBIDDEN,
  [HTTP_CODES.NOT_FOUND]: HTTP_CODES.NOT_FOUND,
  [HTTP_CODES.NOT_ACCEPTABLE]: HTTP_CODES.NOT_ACCEPTABLE,
  [HTTP_CODES.CONFLICT]: HTTP_CODES.CONFLICT,
};
