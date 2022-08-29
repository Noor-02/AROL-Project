const BASE_URL = "http://127.0.0.1:8000/api/";

const EndPoints = {
    USER_LOGIN: BASE_URL + 'login/',
    USER_LOGOUT: BASE_URL + 'logout/',
    USER_REGISTERATION: BASE_URL + 'register/',
    GET_EDUCATIONAL_DETAILS: BASE_URL + "admission/education/",
    GET_EMPLOYMENT_DETAILS: BASE_URL + "admission/employment/",
    GET_QUALIFYING_EXAMINATION_DETAILS: BASE_URL + "admission/examination/",

}

Object.freeze(EndPoints);

export { EndPoints };