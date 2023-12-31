/** @enum {string} */
const PromptTemplatesType = {
  PUBLIC: 'public',
  OWN: 'own',
  CUSTOM_LIST: 'list',
};

/** @enum {string} */
const NotificationSeverity = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

/** @enum {number} */
const PromptTypeNo = {
  UNKNOWN: 0,
  PRIVATE: 1,
  PUBLIC: 2,
  PAID: 3,
};

/** @enum {number} */
const ExternalSystemNo = {
  UNKNOWN: 0,
  OPENAI: 1,
};

/** @enum {number} */
const FeedbackTypeNo = {
  UNKNOWN: 0,
  GENERIC_CONCERN: 1,
  GENERIC_LEGAL_CONCERN: 2,
  LEGAL_COPYRIGHT: 10,
  LEGAL_DMCA: 11,
  LEGAL_TRADEMARK: 12,
  PERSONAL_INFO: 20,
  ABUSIVE: 21,
  ILLEGAL: 22,
  NOT_MULTILINGUAL: 51,
  NOT_GENERIC: 52,
  SPAM: 91,
  PROMPT_SUPPORT_FREE: 101,
  PROMPT_SUPPORT_PAID: 102,
  PROMPT_SUPPORT_WANT_PAID: 103,
};

/** @enum {number} */
const UsageTypeNo = {
  UNKNOWN: 0,
  CLICK: 1,
  SEND: 2,
  RECEIVED_OK: 4,
  RECEIVED_ERROR: 8,
  SAVE: 16,
  UPDATE: 32,
  DELETE: 64,
};

/** @enum {number} */
const VoteTypeNo = {
  UNKNOWN: 0,
  PROMPT_TEASER_THUMBS: 1,
  RESULT_THUMBS: 2,
  FOLLOW_UP_THUMBS: 4,
  MESSAGE_CONFIRM: 8,
  MESSAGE_LIKE: 16,
  MESSAGE_DISLIKE: 32,
};

/** @enum {number} */
const SortModeNo = {
  //UNKNOWN: 0, // not used & not displayed in the "Sort by" dropdown
  TOP_VIEWS: 1,
  TOP_VOTES: 2,
  LATEST_UPDATES: 4,
};

/** @enum {number} */
const MessageStatusNo = {
  UNKNOWN: 0,
  DELETE_MARK: 20,
  DELETE_DONE: 29,
  INACTIVE: 99,
  ACTIVE: 100,
};

/** @enum {number} */
const MessageSeverityNo = {
  UNKNOWN: 0,
  INFO: 1,
  SUCCESS: 2,
  UPDATE: 4,
  MANDATORY_MUST_CONFIRM: 8,
};

/** @enum {number} */
const MessageGroupNo = {
  UNKNOWN: 0,
  SYSTEM: 10000,
  USER: 10001,
};

/** @enum {number} */
const MessageVoteTypeNo = {
  UNKNOWN: VoteTypeNo.UNKNOWN,
  MESSAGE_LIKE: VoteTypeNo.MESSAGE_LIKE,
  MESSAGE_DISLIKE: VoteTypeNo.MESSAGE_DISLIKE,
};

/** @enum {number} */
const UserStatusNo = {
  UNKNOWN: 0,
  NORMAL: 1,
  ADMIN: 2,
  BLACKLIST_BAN: 4,
  BLACKLIST_NO_WRITE: 8,
  BLACKLIST_NO_PUBLIC: 16,
};

/** @enum {number} */
const UserLevelNo = {
  UNKNOWN: 0,
  SUPER_ADMIN: 32768,
};

/** @enum {number} */
const SubPromptTypeNo = {
  UNKNOWN: 0,
  CustomTones: 10,
  CustomStyles: 20,
  CustomContinue: 30,
};

/** @enum {number} */
const ListTypeNo = {
  UNKNOWN: 0,
  AIPRM_VERIFIED: 1,
  FAVORITES: 4,
  HIDDEN: 8,
  CUSTOM: 32,
};

/** @enum {number} */
const ListStatusNo = {
  UNKNOWN: 0,
  DELETE_MARK: 20,
  DELETE_DONE: 29,
  ACTIVE: 100,
  ACTIVE_HIDDEN: 101,
};

/** @enum {number} */
const ItemStatusNo = {
  UNKNOWN: 0,
  DELETE_MARK: 20,
  DELETE_DONE: 29,
  REVIEW_SCHEDULED: 81,
  REVIEWED_AND_REJECTED: 89,
  REPORTED_UNDER_INVESTIGATION: 98,
  REPORTED_HIDDEN: 99,
  ACTIVE: 100,
  ACTIVE_REPORTED_BUT_APPROVED: 101,
};

/** @enum {number} */
const PlanLevelNo = {
  FREE_ANONYMOUS: 1,
  BASIC: 100,
  PLUS: 200,
  PRO: 300,
  ELITE: 400,
  TITAN: 1000,
};

export {
  PromptTemplatesType,
  NotificationSeverity,
  PromptTypeNo,
  ExternalSystemNo,
  FeedbackTypeNo,
  UsageTypeNo,
  VoteTypeNo,
  SortModeNo,
  MessageStatusNo,
  MessageSeverityNo,
  MessageGroupNo,
  MessageVoteTypeNo,
  UserStatusNo,
  UserLevelNo,
  SubPromptTypeNo,
  ListTypeNo,
  ListStatusNo,
  ItemStatusNo,
  PlanLevelNo,
};
