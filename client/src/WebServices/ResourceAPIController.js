import axios from 'axios';
import { EndPoints } from './APIEndPoints';
import { GetFromLocalStorage, AddInLocalStorage } from '../utilities/CommonMethods';
import Constants from '../utilities/Constants';
import { ParseEducationList, ParseEmploymentList } from './DataParser';

const UserLogin = async (data) => {
    // const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? 'Token ' + GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.USER_LOGIN, data).then((response) => {
        let token = response.data.access;
        let refreshToken = response.data.refresh;
        console.log(refreshToken);
        AddInLocalStorage(Constants.KEY_TOKEN, token);
        AddInLocalStorage(Constants.REFRESH_TOKEN, refreshToken);
        AddInLocalStorage(Constants.KEY_USER_LOGGED_IN, "true");
        return response.data;
    })
        .catch(error => {
            return Promise.reject({
                err: error
            });
        })

    return Promise.resolve({
        result: response.data
    });
}

const UserRegistration = async (data) => {
    // const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? 'Token ' + GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.USER_REGISTERATION, data).then((response) => {
        console.log(response.data);
        return response.data;
    })
        .catch(error => {
            return Promise.reject({
                err: error
            });
        })

    return Promise.resolve({
        result: response.data
    });
}

const UserLogout = async (data) => {
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.USER_LOGOUT, data, {
        headers: { 'Authorization': 'Bearer ' + token }
    }).then((response) => {
        AddInLocalStorage(Constants.KEY_USER_LOGGED_IN, "false");
        console.log(response.data);
        return response.data;
    })
        .catch(error => {
            return Promise.reject({
                err: error
            });
        })

    return Promise.resolve({
        result: response.data
    });
}



const GetEducationalDetails = async () => {
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.get(EndPoints.GET_EDUCATIONAL_DETAILS, {
        headers: { 'Authorization': 'Bearer ' + token }
    }).then((response) => {
        console.log(response.data);
        let responseObj = {
            count: response.data.count,
            next: response.data.next,
            previous: response.data.previous,
            results: ParseEducationList(response.data.results)
        }
        response.data = responseObj;
        return response;
    })
        .catch(error => {
            return Promise.reject({
                err: error
            });
        })

    return Promise.resolve({
        result: response.data
    });
}

const GetEmploymentDetails = async () => {
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.get(EndPoints.GET_EMPLOYMENT_DETAILS, {
        headers: { 'Authorization': 'Bearer ' + token }
    }).then((response) => {
        // console.log(response.data);
        let responseObj = {
            count: response.data.count,
            next: response.data.next,
            previous: response.data.previous,
            results: ParseEmploymentList(response.data.results)
        }
        response.data = responseObj;
        return response;
    })
        .catch(error => {
            return Promise.reject({
                err: error
            });
        })

    return Promise.resolve({
        result: response.data
    });
}

const GetQualifyingDetails = async () => {
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.get(EndPoints.GET_QUALIFYING_EXAMINATION_DETAILS, {
        headers: { 'Authorization': 'Bearer ' + token }
    }).then((response) => {
        console.log(response.data);
        return response.data;
    })
        .catch(error => {
            return Promise.reject({
                err: error
            });
        })

    return Promise.resolve({
        result: response.data
    });
}

const ResourceAPIController = {
    UserLogin, UserRegistration, UserLogout, GetEducationalDetails, GetEmploymentDetails, GetQualifyingDetails
}



export default ResourceAPIController;
