const jwt = require('jsonwebtoken');

function checkAdminToken(req, res, next) {
    const adminAuthToken = req.cookies.adminAuthToken;
    console.log('adminAuthToken: ', adminAuthToken);
    if (!adminAuthToken) {
        return res.status(401).json({ message: 'Admin authentication failed: No adminAuthToken provided', ok: false });
    }

    jwt.verify(adminAuthToken, process.env.JWT_ADMIN_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error('Admin authentication failed: Invalid adminAuthToken', err);
            return res.status(401).json({ message: 'Admin authentication failed: Invalid adminAuthToken', ok: false });
        } else {

            const newAuthToken = jwt.sign({ adminId: decoded.adminId }, process.env.JWT_ADMIN_SECRET_KEY);

            res.cookie('adminAuthToken', newAuthToken, { httpOnly: true, secure: true, sameSite: 'None' });

            req.userId = decoded.userId;
            req.ok = true;
            next();


         
        }
    });
}

module.exports = checkAdminToken;
