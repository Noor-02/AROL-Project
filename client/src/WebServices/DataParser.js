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

export {
    ParseEducationList, ParseEmploymentList
};