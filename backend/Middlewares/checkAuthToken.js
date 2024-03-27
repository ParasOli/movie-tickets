const jwt = require('jsonwebtoken');

function checkAuthToken(req, res, next) {
    const authToken = req.cookies.userAuthToken;
    const refreshToken = req.cookies.refreshToken;
    console.log(authToken, "tokennnnnn");



    jwt.verify(authToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (refreshErr, refreshDecoded) => {
                if (refreshErr) {

                    return res.status(401).json({ message: 'Authentication failed: Both tokens are invalid', ok: false });
                }

                else {
                    const newAuthToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_SECRET_KEY);
                    const newRefreshToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.REFRESH_TOKEN_SECRET);

                    res.cookie('authToken', newAuthToken, { httpOnly: true, secure: true, sameSite: 'None' });
                    res.cookie('refreshToken', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None' });

                    req.userId = refreshDecoded.userId;
                    req.ok = true;
                    next();
                }
            })
            // 1. expired

            // 2. not expired
        }

        else {
            req.userId = decoded.userId;
            next();
        }
    })
}

module.exports = checkAuthToken;