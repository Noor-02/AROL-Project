import { IsListEmpty } from "../utilities/CommonMethods"

// const parseDateForInput = (date) => {
//     console.log("DATE PUT IN PARSER =>", date)
//     const [year, month, day] = date.split('-');
//     const result = [month, day, year].join('-');
//     console.log("DATE AFTER PARSING =>", result);
//     return result
// }

const ParseEducationList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                applicantId: item.applicant_id,
                certificate: item.certificate,
                class: item.division,
                duration: item.duration,
                nameOfExamPassed: item.examination,
                examination: item.qualification,
                id: item.id,
                percentOrCpi: item.marks_type,
                marksheet: item.marksheet,
                maxMarks: item.out_of,
                acquiredMarks: item.percent,
                specialization: item.specialization,
                status: item.status,
                board: item.university,
                yearOfPassing: item.year_of_passing
            }
        }) : []

    return updateList;
}

const ParseBackEducationList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                qualification: item.examination,
                examination: item.nameOfExamPassed,
                university: item.board,
                duration: item.duration,
                status: item.status,
                year_of_passing: item.yearOfPassing,
                marks_type: item.percentOrCpi,
                percent: item.acquiredMarks,
                out_of: item.maxMarks,
                division: item.class,
                specialization: item.specialization,
                marksheet: item.marksheet,
                certificate: item.certificate,
                applicant_id: item.applicantId
            }
        }) : []

    return updateList;
}

const ParseBackEmploymentList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                applicant_id: item.applicantId,
                duration: item.duration,
                emoluments: item.emoluments,
                from_date: item.from,
                id: item.id,
                organization: item.organization,
                post_held: item.post,
                responsibilities: item.responsibility,
                to_date: item.to,
                work_type: item.workType,
            }
        }) : []

    return updateList;
}

const ParseEmploymentList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            // console.log("DATE FROM PARSER =>", item.from_date, " ", item.to_date)
            // console.log("DATE FROM PARSER =>", parseDateForInput(item.from_date), " ", parseDateForInput(item.to_date))
            return {
                applicantId: item.applicant_id,
                duration: item.duration,
                emoluments: item.emoluments,
                from: item.from_date,
                id: item.id,
                organization: item.organization,
                post: item.post_held,
                responsibility: item.responsibilities,
                to: item.to_date,
                workType: item.work_type,
                regularity: "Regular",
                current: item.to === new Date() ? "Yes" : "No"
            }
        }) : []

    return updateList;
}

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
    ParseEducationList, ParseEmploymentList, ParseBackEducationList, ParseBackEmploymentList, ParseProfileList, ParseProjectList
};