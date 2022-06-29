export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
  },
  HEADER_TYPE: {
    URL_ENCODED: "application/x-www-form-urlencoded",
    APPLICATION_JSON: "application/json",
  },
  HEADER_KEYS: {
    DEVICE_TYPE: "device-type",
    DEVICE_ID: "device-id",
    SESSION_TOKEN: "session-token",
    PUSH_TOKEN: "push-token",
  },
  DEVICE_TYPE: {
    ANDROID: "android",
    IOS: "ios",
    WEB: "web",
  },
  CONTENT_TYPE: {
    URL_ENCODE: "application/x-www-form-urlencoded",
  },
  WEBSERVICE_PATH: {
    SYNC_ATTENDANCE: "sync-attendance/",
  },

  RESPONSE_STATUS: {
    SUCCESS: true,
    FAILURE: false,
  },
  RESPONSE_CODES: {
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    OK: 200,
    NO_CONTENT_FOUND: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    GONE: 410,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUEST: 429,
  },
  LOG_LEVEL_TYPE: {
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
    VERBOSE: "verbose",
    DEBUG: "debug",
    SILLY: "silly",
    FUNCTIONAL: "functional",
    HTTP_REQUEST: "http request",
  },
};

export const stringConstants = {
  SERVICE_STATUS_HTML: "Ecommerce Microservices is working fine",
};

export const genericConstants = {
  DEVICE_TYPE: {},
};

export const apiSuccessMessage = {
  FETCH_SUCCESS: "Information fetched successfully",
  ADDED_DETAILS: "Personal details added successfully",
  DELETED_DETAILS: "Personal details deleted successfully",
  UPDATED_DETAILS: "Personal details updated successfully",
  ADDED_DP: "DP added successfully",
  DELETED_DP: "DP deleted successfully",
  UPDATED_DP: "DP updated successfully",
  ADDED_CONTRACTOR: "Contractor Details added successfully",
  DELETED_CONTRACTOR: "Contractor Details deleted successfully",
  UPDATED_CONTRACTOR: "Contractor Details updated successfully",
  ADDED_BUILDER: "Builder Details added successfully",
  DELETED_BUILDER: "Builder Details deleted successfully",
  UPDATED_BUILDER: "Builder Details updated successfully",
  ADDED_COMMERCIAL_CAPABILITY:
    "Commercial Capability Details added successfully",
  DELETED_COMMERCIAL_CAPABILITY:
    "Commercial Capability Details deleted successfully",
  UPDATED_COMMERCIAL_CAPABILITY:
    "Commercial Capability Details updated successfully",
  ADDED_DP: "DP added successfully",
  DELETED_DP: "DP deleted successfully",
  UPDATED_DP: "DP updated successfully",
  CREATED_INSTITUTE: "User created successfully",
  UPDATED_INSTITUTE: "User updated successfully",
  DELETE_INSTITUTE: "User removed successfully",
  CREATED_PHOTOGRAPHER: "Photographer created successfully",
  UPDATED_PHOTOGRAPHER: "Photographer updated successfully",
  DELETED__PHOTOGRAPHER: "Photographer deleted successfullly",
  CREATED_COMM_CAP: "Commercial cappability created successfully",
  UPDATED_COMM_CAP: "Commercial cappability updated successfully",
  DELETED_COMM_CAP: "Commercial cappability deleted successfully",
  ADDED_JOB: "Job added successfully",
  DELETED_JOB: "Job deleted successfully",
  UPDATED_JOB: "Job updated successfully",
  ADDED_EMPLOYER: "Employer added successfully",
  DELETED_EMPLOYER: "Employer  deleted successfully",
  UPDATED_EMPLOYER: "Employer updated successfully",
  DELETED_PROFESSIONAL: "Professional deleted succefully",
};

export const apiEndpoints = {
  GET_METERS: "/get-meters",
};

export const apiFailureMessage = {
  INVALID_PARAMS: "Invalid Parameters",
  FIND_QUERY_UPDATE_QUERY:
    "findQuery and updateQuery params are required fields",
  INVALID_REQUEST: "Invalid Request",
  INVALID_SESSION_TOKEN: "Invalid session token",
  INTERNAL_SERVER_ERROR: "Internal server Error",
  BAD_REQUEST: "Bad Request!",
  DEVICE_ID_OR_SESSION_TOKEN_EMPTY:
    "Device id or session token can't be empty or null",
  SESSION_GENERATION: "Unable to generate session!",
  SESSION_EXPIRED: "Session Expired!",
  USER_EXIST: "User Already Exist",
  NOT_FOUND: "User not found",
  WRONG_PASSWORD: "Wrong Password",
};
