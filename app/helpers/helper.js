
//this function handle the returning respose
function response(res, success, message) {
    return res.json({
        success: success,
        message: message
    });
}

export default { response };
