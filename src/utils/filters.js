const globalFilter = { updatedAt: false, createdAt: false }
const commonFilter = { ...globalFilter, password: false, role: false, isLoggedIn: false }

const userFilter = { ...commonFilter }
const ownerFilter = { ...commonFilter }





module.exports = {
    globalFilter,
    ownerFilter,
    userFilter
}