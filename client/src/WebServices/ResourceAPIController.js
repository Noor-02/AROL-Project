import axios from 'axios';
import { EndPoints } from './APIEndPoints';
import { GetFromLocalStorage, AddInLocalStorage } from '../utilities/CommonMethods';
import Constants from '../utilities/Constants';
import { ParsedError } from './DataParser';

const UserLogin = async (data) => {
    // const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? 'Token ' + GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.USER_LOGIN, data).then((response) => {
        let token = response.data.access;
        let refreshToken = response.data.refresh;
        console.log(refreshToken);
        AddInLocalStorage(Constants.KEY_TOKEN, token);
        AddInLocalStorage(Constants.REFRESH_TOKEN, refreshToken);
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
    // const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.USER_LOGOUT, data
        // headers: { 'Authorization': token }
    ).then((response) => {
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



// const GetEducationalDetails = async () => {
//     const token = (localStorage.get(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? 'Token ' + GetFromLocalStorage(Constants.KEY_TOKEN) : '';
//     let response = await axios.get(EndPoints.GET_EDUCATIONAL_DETAILS).then((response, {
//         headers: {
//             'Authorization': token
//         }
//     }) => {

//         console.log(response.data);
//         return response.data;
//     })
//         .catch((error) => {
//             return Promise.reject({
//                 error: ParsedError(error, EndPoints.GET_EDUCATIONAL_DETAILS)
//             });
//         })

//     return Promise.resolve({
//         result: response.data
//     });
// }

const ResourceAPIController = {
    UserLogin, UserRegistration, UserLogout,
}



export default ResourceAPIController;
