const Product = require('../modules/product');


exports.getProduct = async (req, res) => {
    try{
        const product = await Product.findAll();
        res.json(product);    
    } catch(error){
        res.status(400).json({message: 'Bad get request!'});
    }
};

exports.postProduct = async (req, res) => {
    try{
        const product = req.body.product;
        const  discription = req.body.discription;
        const price = req.body.price;
        const  quantity = req.body.quantity;

        const productData = await Product.create({
            product,
            discription,
            price,
            quantity
        });

        res.json(productData);
    } catch(error){
        res.status(500).json({message: 'Failed to create productData'});
    }
};

exports.putProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updateData = req.body; 

        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }

        product.update(updateData);

        return res.json({ message: 'Review updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to update quantity' });
    }
};