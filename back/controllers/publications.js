const models = require ('../models');

module.exports = {

    createPublication : function(req, res){
    const publication = {
        userId: req.body.userId,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        likes:0
    }
    models.Publication.create(publication).then(result => {
        res.status(201).json({
            message: 'Post created successfully',
            post: result
        });
        }).catch(error => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error
            })
        });
    },
    getOnePublication : function(req, res){
        const id = req.params.id;
        models.Publication.findByPk(id).then(result => {
            res.status(200).json(result);
        }).catch(error => {
            res.status(500).json({
                message: 'Something went wrong'});
        });
    },

    getAllPublication: function(req, res){
        models.Publication.findAll().then(result => {
            res.status(200).json(result);
        }) .catch(error => {
            res.status(500).json({
                message: 'Something went wrong'});
        });
    },
    updatePublication : function(req,res){
        const id = req.params.id;
        const updatedPublication ={
            content: req.body.content,
            imageUrl: req.body.imageUrl,
        }

        const userId = req.body.userId;

        models.Publication.update(updatedPublication, {where: {id : id, userId :userId}})
        .then(result => {
            res.status(200).json({
            message:"publication updated successfully",
            post: updatedPublication
        });
    }).catch(error => {
        res.status(200).json({
            message: "Somenthing went wrong",
            error: result
        });
    })
    },

    destroyPublication: function(req, res){
        const id = req.params.id; 
        const userId = req.body.userId;

        models.Publication.destroy({where: {id: id, userId: userId}})
        .then(result => {
            res.status(200).json({
            message:"publication deleted successfully"});
    }).catch(error => {
        res.status(200).json({ message: "Somenthing went wrong"
        });
    })
    }

}