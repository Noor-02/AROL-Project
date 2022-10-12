import axios from 'axios';
import { EndPoints } from './APIEndPoints';
import { GetFromLocalStorage, AddInLocalStorage } from '../utilities/CommonMethods';
import Constants from '../utilities/Constants';
import { ParseEducationList, ParseEmploymentList, ParseProfileList, ParseProjectList, ParseRefereeDetails } from './DataParser';

const UserLogin = async (data) => {
    // const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? 'Token ' + GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios
        .post(EndPoints.USER_LOGIN, data)
        .then((response) => {
            let token = response.data.access;
            let refreshToken = response.data.refresh;
            console.log(refreshToken);
            AddInLocalStorage(Constants.KEY_TOKEN, token);
            AddInLocalStorage(Constants.REFRESH_TOKEN, refreshToken);
            AddInLocalStorage(Constants.KEY_USER_LOGGED_IN, "true");
            return response.data;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
};

const UserRegistration = async (data) => {
    // const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? 'Token ' + GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios
        .post(EndPoints.USER_REGISTERATION, data)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
};

const UserLogout = async (data) => {
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.USER_LOGOUT, data, {
        headers: { 'Authorization': 'Bearer ' + token }
    }).then((response) => {
        AddInLocalStorage(Constants.KEY_USER_LOGGED_IN, "false");
        AddInLocalStorage(Constants.KEY_TOKEN, "");
        AddInLocalStorage(Constants.REFRESH_TOKEN, "");
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
        result: response.data,
    });
};

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
        result: response.data,
    });
};

const EmploymentDetailsSubmit = async (data) => {
    // console.log("API CALL DATA =>", data)
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.GET_EMPLOYMENT_DETAILS, data, {
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

const DeleteEmployment = async (id) => {
    // console.log("API CALL DATA =>", data)
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.delete(EndPoints.POST_EMPLOYMENT_DETAILS(id), {
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

const EducationalDetailsSubmit = async (data) => {
    // console.log("API CALL DATA =>", data)
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.post(EndPoints.GET_EDUCATIONAL_DETAILS, data, {
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

const DeleteEducation = async (id) => {
    // console.log("API CALL DATA =>", data)
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.delete(EndPoints.POST_EDUCATION_DETAILS(id), {
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

const GetPersonalDetails = async () => {
    const token =
        GetFromLocalStorage(Constants.KEY_TOKEN) !== null &&
            GetFromLocalStorage(Constants.KEY_TOKEN) !== ""
            ? GetFromLocalStorage(Constants.KEY_TOKEN)
            : "";
    let response = await axios
        .get(EndPoints.GET_PERSONAL_DETAILS, {
            headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
            console.log(response)
            response.data.results = ParseProfileList(response.data.results);
            return response;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
};

const PersonalDetailsSubmit = async (data, id) => {
    console.log("API CALL DATA =>", data)
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.patch(EndPoints.POST_PERSONAL_DETAILS(id), data, {
        headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'multipart/form-data'
        }
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

const GetProjectDetails = async () => {
    const token =
        GetFromLocalStorage(Constants.KEY_TOKEN) !== null &&
            GetFromLocalStorage(Constants.KEY_TOKEN) !== ""
            ? GetFromLocalStorage(Constants.KEY_TOKEN)
            : "";
    let response = await axios
        .get(EndPoints.GET_PROJECT_DETAILS, {
            headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
            let responseObj = {
                count: response.data.count,
                next: response.data.next,
                previous: response.data.previous,
                results: ParseProjectList(response.data.results)
            }
            response.data = responseObj;
            return response;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
};

const ProjectDetailsSubmit = async (data) => {
    const token =
        GetFromLocalStorage(Constants.KEY_TOKEN) !== null &&
            GetFromLocalStorage(Constants.KEY_TOKEN) !== ""
            ? GetFromLocalStorage(Constants.KEY_TOKEN)
            : "";
    let response = await axios
        .post(EndPoints.GET_PROJECT_DETAILS, data, {
            headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
};

const DeleteProject = async (id) => {
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.delete(EndPoints.POST_PROJECT_DETAILS(id), {
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

const GetRefereeDetails = async () => {
    const token =
        GetFromLocalStorage(Constants.KEY_TOKEN) !== null &&
            GetFromLocalStorage(Constants.KEY_TOKEN) !== ""
            ? GetFromLocalStorage(Constants.KEY_TOKEN)
            : "";
    let response = await axios
        .get(EndPoints.GET_REFEREE_DETAILS, {
            headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
            let responseObj = {
                count: response.data.count,
                next: response.data.next,
                previous: response.data.previous,
                results: ParseRefereeDetails(response.data.results)
            }
            response.data = responseObj;
            return response;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
};

const RefereeDetailsSubmit = async (data) => {
    const token =
        GetFromLocalStorage(Constants.KEY_TOKEN) !== null &&
            GetFromLocalStorage(Constants.KEY_TOKEN) !== ""
            ? GetFromLocalStorage(Constants.KEY_TOKEN)
            : "";
    let response = await axios
        .post(EndPoints.GET_REFEREE_DETAILS, data, {
            headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
}

const DeleteReferee = async (id) => {
    // console.log("API CALL DATA =>", data)
    const token = (GetFromLocalStorage(Constants.KEY_TOKEN) !== null && GetFromLocalStorage(Constants.KEY_TOKEN) !== '') ? GetFromLocalStorage(Constants.KEY_TOKEN) : '';
    let response = await axios.delete(EndPoints.POST_REFEREE_DETAILS(id), {
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

const ChangePassword = async (data) => {
    const token =
        GetFromLocalStorage(Constants.KEY_TOKEN) !== null &&
            GetFromLocalStorage(Constants.KEY_TOKEN) !== ""
            ? GetFromLocalStorage(Constants.KEY_TOKEN)
            : "";
    let response = await axios
        .post(EndPoints.CHANGE_PASSWORD, data, {
            headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject({
                err: error,
            });
        });

    return Promise.resolve({
        result: response.data,
    });
}

const ResourceAPIController = {
    UserLogin, UserRegistration, EducationalDetailsSubmit, EmploymentDetailsSubmit, GetPersonalDetails, UserLogout, GetEducationalDetails, GetEmploymentDetails, GetProjectDetails,
    PersonalDetailsSubmit, DeleteReferee, DeleteProject, ProjectDetailsSubmit, GetRefereeDetails, RefereeDetailsSubmit, ChangePassword, DeleteEmployment, DeleteEducation
}



export default ResourceAPIController;
