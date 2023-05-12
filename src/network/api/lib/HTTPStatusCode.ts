/**
 * Copyright 2023 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export enum HTTPStatusCode {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,

  /**
   * All `1xx` status codes.
   */
  InformationalResponses = Continue |
    SwitchingProtocols |
    Processing |
    EarlyHints,

  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,

  /**
   * All `2xx` status codes.
   */
  Success = OK |
    Created |
    Accepted |
    NonAuthoritativeInformation |
    NoContent |
    ResetContent |
    PartialContent |
    MultiStatus |
    AlreadyReported |
    IMUsed,

  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  SwitchProxy = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  /**
   * All `3xx` status codes.
   */
  Redirection = MultipleChoices |
    MovedPermanently |
    Found |
    SeeOther |
    NotModified |
    UseProxy |
    SwitchProxy |
    TemporaryRedirect |
    PermanentRedirect,

  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,

  /**
   * All `4xx` error codes.
   */
  ClientErrors = BadRequest |
    Unauthorized |
    PaymentRequired |
    Forbidden |
    NotFound |
    MethodNotAllowed |
    NotAcceptable |
    ProxyAuthenticationRequired |
    RequestTimeout |
    Conflict |
    Gone |
    LengthRequired |
    PreconditionFailed |
    PayloadTooLarge |
    URITooLong |
    UnsupportedMediaType |
    RangeNotSatisfiable |
    ExpectationFailed |
    ImATeapot |
    MisdirectedRequest |
    UnprocessableEntity |
    Locked |
    FailedDependency |
    UpgradeRequired |
    PreconditionRequired |
    TooManyRequests |
    RequestHeaderFieldsTooLarge |
    UnavailableForLegalReasons,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,

  /**
   * All `5xx` error codes.
   */
  ServerErrors = InternalServerError |
    NotImplemented |
    BadGateway |
    ServiceUnavailable |
    GatewayTimeout |
    HTTPVersionNotSupported |
    VariantAlsoNegotiates |
    InsufficientStorage |
    LoopDetected |
    NotExtended |
    NetworkAuthenticationRequired,
}
