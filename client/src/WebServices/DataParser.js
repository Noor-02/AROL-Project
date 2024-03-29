import { IsListEmpty } from "../utilities/CommonMethods"

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
                specialization: item.specialization === null ? "" : item.specialization,
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
                applicant_id: item.applicantId,
                id: item.id
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
                // regularity: "Regular",
                current: item.to === new Date() ? "Yes" : "No"
            }
        }) : []

    return updateList;
}

const ParseProfileList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                id: item.id,
                applicantId: item.applicant_id,
                admissionYear: item.academic_year,
                typeOfApplicant: item.type_of_applicant ? "Indian Applicant" : "Foreign Applicant",
                fullName: item.full_name,
                fatherSpouseName: item.father_or_spouse_name,
                dob: item.date_of_birth,
                gender: item.gender,
                caste: item.category,
                maritalStatus: item.marital_status,
                contactNumber: item.contact_number,
                parentContact: item.parent_contact_number,
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
                signature: item.signature,
                photograph: item.photograph,
                percentageDisability: item.percentage_disability ? "Greater than or equal to 40%" : "Less than 40%",
                disabilityCertificate: item.disability_certificate,
                exServiceman: item.ex_serviceman ? "Yes" : "No",
                exServicemanCertificate: item.serviceman_certificate,
            }
        }) : []
    return updateList;
}

const ParseBackProfileList = (item) => {
    // const updateList = !IsListEmpty(list)
    //     ? list.map(item => {
    console.log("DATA PARSER TYPE OF APPLICANT=>", item.typeOfApplicant)
    let result = {
        id: item.id,
        applicant_id: item.applicantId,
        type_of_applicant: item.typeOfApplicant === "Indian Applicant" ? true : false,
        // type_of_applicant: true,
        nationality: item.nationality,
        full_name: item.fullName,
        ...(item.hasOwnProperty("photograph") && { photograph: item.photograph }),
        ...(item.hasOwnProperty("signature") && { signature: item.signature }),
        ...(item.hasOwnProperty("disabilityCertificate") && { disability_certificate: item.disabilityCertificate }),
        ...(item.hasOwnProperty("exServicemanCertificate") && { serviceman_certificate: item.exServicemanCertificate }),
        father_or_spouse_name: item.fatherSpouseName,
        date_of_birth: item.dob,
        contact_number: item.contactNumber,
        parent_contact_number: item.parentContact,
        pwd: item.pwd === "Yes" ? true : false,
        disability: item.typeOfDisability,
        // disability_certificate: null,
        percentage_disability: item.percentageDisability === "Greater than or equal to 40%" ? true : false,
        ex_serviceman: item.exServiceman === "Yes" ? true : false,
        // serviceman_certificate: item.exServicemanCertificate,
        c_address: item.cAddress,
        c_city: item.cCity,
        c_state: item.cState,
        c_pin: item.cPinCode,
        p_address: item.pAddress,
        p_city: item.pCity,
        p_state: item.pState,
        p_pin: item.pPinCode,
        academic_year: item.admissionYear,
        marital_status: item.maritalStatus,
        gender: item.gender,
        category: item.caste
    }
    return result;
    // }) : []

    // return updateList;
}

const ParseProjectList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                applicantId: item.applicant_id,
                title: item.title,
                university: item.university,
                supervisorName: item.supervisor,
                degree: item.degree,
                completionYear: item.year_of_submission,
                degreeList: ["Under Graduation", "Post Graduation"],
                formValid: false,
                titleValidity: false,
                supervisorNameValidity: false,
                universityValidity: false,
                id: item.id
            }
        }) : []

    return updateList;
}

const ParseBackprojectList = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                title: item.title,
                university: item.university,
                degree: item.degree,
                year_of_submission: item.completionYear,
                supervisor: item.supervisorName,
                applicant_id: item.applicantId,
                id: item.id
            }
        }) : []

    return updateList;
}

const ParseRefereeDetails = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                refereeName: item.referee_name,
                refereeEmail: item.referee_email,
                designation: item.referee_designation,
                organization: item.referee_organization,
                number: item.referee_number,
                applicationId: item.application_id,
                id: item.id
            }
        }) : []

    return updateList;
}

const ParseBackRefereeDetails = (list) => {
    const updateList = !IsListEmpty(list)
        ? list.map(item => {
            return {
                referee_name: item.refereeName,
                referee_email: item.refereeEmail,
                referee_designation: item.designation,
                referee_organization: item.organization,
                referee_number: item.number,
                application_id: item.applicationId,
                id: item.id
            }
        }) : []

    return updateList;
}

const ChangePasswordParser = (obj) => {
    const tempObj = {
        old_password: obj.oldPassword,
        new_password: obj.newPassword,
        new_password2: obj.newPassword2
    }

    return tempObj;
}

export {
    ParseEducationList, ParseEmploymentList, ParseBackEducationList, ParseBackEmploymentList, ParseProfileList, ParseProjectList,
    ParseBackProfileList, ParseBackprojectList, ParseRefereeDetails, ParseBackRefereeDetails, ChangePasswordParser
};