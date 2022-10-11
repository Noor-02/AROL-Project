const BASE_URL = "http://127.0.0.1:8000/api/";

const EndPoints = {
    USER_LOGIN: BASE_URL + 'login/',
    USER_LOGOUT: BASE_URL + 'logout/',
    USER_REGISTERATION: BASE_URL + 'register/',
    GET_EDUCATIONAL_DETAILS: BASE_URL + "admission/education/",
    GET_PERSONAL_DETAILS: BASE_URL + "admission/profile/",
    GET_EMPLOYMENT_DETAILS: BASE_URL + "admission/employment/",
    GET_QUALIFYING_EXAMINATION_DETAILS: BASE_URL + "admission/examination/",
    GET_PROJECT_DETAILS: BASE_URL + "admission/project/",
    GET_REFEREE_DETAILS: BASE_URL + 'admission/recommendation/',
    CHANGE_PASSWORD: BASE_URL + 'change_password'
}

Object.freeze(EndPoints);

export { EndPoints };