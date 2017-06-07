
//this function handle the returning respose
function response(res, status, data, message) {
    return res.json({
        status: status,
        data: data,
        message: message
    });
}

export default { response };
