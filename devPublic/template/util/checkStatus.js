/**
 * Created by huy on 5/22/17.
 */
const checkStatus = (status, callback) => {
    status = 0
    if (callback()) {
        status =-1
    } else {
        status = 1
    }
}
module.exports = checkStatus
