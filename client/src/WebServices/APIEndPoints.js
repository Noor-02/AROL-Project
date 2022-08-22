const BASE_URL = "http://127.0.0.1:8000/api/";

const EndPoints = {
    USER_LOGIN: BASE_URL + 'login/',
    USER_LOGOUT: BASE_URL + 'logout/',
    USER_REGISTERATION: BASE_URL + 'register/',
    GET_EDUCATIONAL_DETAILS: BASE_URL + "admission/education/",

}

Object.freeze(EndPoints);

export { EndPoints };