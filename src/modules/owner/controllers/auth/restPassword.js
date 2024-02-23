const restPassword = require('../../../../common/Auth_operation/restPassword')
const Owner = require('./../../owner.model')

module.exports = restPassword(Owner)