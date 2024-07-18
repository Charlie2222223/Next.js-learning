export const Host = process.env.SERVER_URL;
export const API_URL =  `${Host}/api`;

export const AUTH_ROUTES = `${API_URL}/auth`;


export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/get-user-info`