const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    discription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity:  {
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


module.exports = Product;