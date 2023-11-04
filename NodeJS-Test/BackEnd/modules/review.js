const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Review = sequelize.define('review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    review: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating:  {
        type: Sequelize.INTEGER,
        allowNull:false
    }
});


sequelize
    .sync()
    .then(res => {
        console.log('Table is created!');
       
    }) .catch(err => {
        console.log(err);
    })


module.exports = Review;