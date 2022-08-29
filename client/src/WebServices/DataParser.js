import { IsListEmpty } from "../utilities/CommonMethods"

const ParseProfileList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                admissionYear: "AY 2022-23",
                typeOfApplicant: item.type_of_applicant ? "Indian Applicant" : "Foriegn Applicant",
                fullName: item.full_name,
                fatherSpouseName: item.father_or_spouse_name,
                dob: item.date_of_birth,
                gender: item.gender,
                caste: item.caste,
                maritalStatus: item.marital_list,
                contactNumber: item.contact_number,
                parentConatct: item.parent_conatct_number,
                nationality: item.nationality,
                otherNationality: "",
                pwd: item.pwd ? "Yes" : "No",
                typeOfDisability: item.pwd ? item.disability : "",
                cAddress: item.c_address, 
                cState: item.c_state, 
                cCity: item.c_city, 
                cPinCode: item.c_pin,
                pAddress: item.p_address, 
                pState: item.p_state, 
                pCity: item.p_city, 
                pPinCode: item.p_pin,
            }
        }) : []
    return updateList;
}
    
const ParseProjectList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                title: item.title,
                university: item.university,
                supervisorName: item.supervisor,
                degree: item.degree,
                completionYear: item.year_of_submission,
                degreeList: ["Under Graduation", "Post Graduation"],
                parentNameValidity: false,
                nameValidity: false,
                formValid: false,
                titleValidity: false,
                supervisorNameValidity: false,
                universityValidity: false,
            }
        }) : []
    
    return updateList;
}

export {
    ParseProfileList, 
    ParseProjectList
};