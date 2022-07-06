const productmodel = require('../models/product.model');

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
   productmodel.find({}, (err, products) => { 
        if (err) {    
            res.status(500).json({
                message: 'Error occurred while getting products',
                error: err
            }); 
        } else {  
            res.status(200).json({
                message: 'Successfully got products',
                products: products  
            });
        }
    }
    );
}

 function postProducts(req, res) {
   productmodel.create(req.body, (err, product) => {
        if (err) {
            res.status(500).json({
                message: 'Error occurred while creating product', 
                error: err
            });
        } else {
            res.status(201).json({
                message: 'Successfully created product',
                product: product
            });
          }
        }
   )
}


module.exports  = {
    getProducts,
    postProducts
}