const Review = require('../modules/review');


exports.getReview = async (req, res) => {
    try{
        const review = await Review.findAll();
        res.json(review);    
    } catch(error){
        res.status(400).json({message: 'Bad get request!'});
    }
};

exports.postReview = async (req, res) => {
    try{
        const company = req.body.company;
        const title = req.body.title;
        const review = req.body.review;
        const  rating = req.body.rating;

        const reviewData = await Review.create({
            company,
            title,
            review,
            rating
        });

        res.json(reviewData);
    } catch(error){
        res.status(500).json({message: 'Failed to create reviewData'});
    }
};