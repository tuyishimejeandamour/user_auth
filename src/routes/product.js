/**
 * @swagger
 * tags:
 *   name: Product APIs
 *   description: APIs to handle product resources.
 */

/**
 * @swagger
 * /api/v1/product:
 *  get:
 *   description: Get current products
 *   tags: [Product APIs]
 *   responses:
 *    '200':
 *      description: Successful operation
 * 
 * @param {*} req 
 * @param {*} res 
 */
function getProducts(req, res) {
  res.send('getProducts');
}

 function postProducts(req, res) {
  res.send('postProducts');
}


module.exports  = {
    getProducts,
    postProducts
}