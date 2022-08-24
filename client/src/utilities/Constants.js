const Constants = {
    KEY_TOKEN: 'token',
    KEY_USER_LOGGED_IN: 'userLoggedIn',
    REGEX_PASSWORD_VALIDITY: /^[\w\_\.\@\#\$]{8,32}$/,
    REGEX_EMAIL_VALIDITY: /^(?:\w+)(?:[.-][\w]+)*@(?:\w+)(?:[.-][\w]+)*(\.\w{2,3})$/,
    REGEX_URL_VALIDITY: /(https?:\/\/(?:www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,})/,
}

Object.freeze(Constants);
export default Constants;