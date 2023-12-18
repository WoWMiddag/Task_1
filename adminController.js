const Models = require("../models/adminModel.js");

exports.getArticleAll = async function(req, res){
    let m = await Models.getAll();
    res.render('adminArticles', {data:m});
};
exports.gatArticle = async function(req, res){
    let m = await Models.getOne(req.params.idArticle);
    res.render('AdminArticleShow', {data:m});
};
exports.addArticle = async function(req, res){
    await Models.addOne(req.body);
    let m = await Models.gatAll();
    res.render('adminArticles', {data:m});
};
exports.editArticle = async function(req, res){
    await Models.editOne(req.body);
    let m = await Models.getOne(req.body.idArticle);
    res.render('adminArticleShow', {data:m});
};
exports.daleteArticle = async function(req, res){
    await Models.deleteOne();
    let m = await Models.getAll();
    res.render('adminArticles', {data:m});
};