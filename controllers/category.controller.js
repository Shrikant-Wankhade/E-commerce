const {getAllCategories} = require('../services/category.services');

const getCategories = async (req,res)=>{
    const allCategoriesData = await getAllCategories(); //await needs to put here as it return a promise.
    return res.json({
        "message":"successfully fetched the categories",
        "success":true,
        "code":200,
        data: allCategoriesData,
    })
}

module.exports = {
    getCategories
}