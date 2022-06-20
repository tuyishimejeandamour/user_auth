
/**
 * @swagger
 * tags:
 *   name: User APIs
 *   description: APIs to handle user resources.
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *    summary: "Sign up a new user"
 *    tags: [User APIs]
 *    parameters:
 *     - name: "email"
 *       in: "query"
 *       description: "insert the email of the user,"
 *       required: true
 *       type: "string"
 *     - name: "password"
 *       in: "query"
 *       description: "insert the password of the user,"
 *       required: true
 *       type: "string"
 *        
 *    responses:
 *      '200':
 *        description: Successful operation
 * @param {*} req 
 * @param {*} res 
 */
function sign_in(req, res) {
    res.json({
        message: 'sign_up',
        user: req.user
    });
}

function sign_up(req, res) {
    res.json({
        message: 'Signed up successfully',
        user: req.user
    });
}

module.exports = {
    sign_up,
    sign_in
}