
const CategoryController = require('../controllers/category.controller')

const routes = (app) =>{
    app.get("/ecom/api/v1/categories",CategoryController.getCategories);
}

module.exports = routes;
