const models = require ('../models');

module.exports = {

    createComment : function(req, res){
    const comment = {
        userId: req.body.userId,
        publicationId: req.params.publicationId,
        content: req.body.content,
    }
    models.Comment.create(comment).then(result => {
        res.status(201).json({
            message: 'Comment created successfully',
            post: result
        });
        }).catch(error => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error
            })
        });
    },
    getOneComment : function(req, res){
        const id = req.params.id;
        models.Comment.findByPk(req.params.publicationId).then(post => {
            if(post === null){
                res.status(404).json({
                    message: "Post not found"
                });
            }else{
                models.Comment.create(comment).then(result => {
                    res.status(201).json({
                        message: "Comment created successfully",
                        comment: result
                    });
                }).catch(error => {
                    res.status(500).json({
                        message: "Something went wrong",
                        error: error
                    });
                });
            }
        }).catch(err => {
            res.status(500).json({
                message: "Something went wrong",
                error: err
            });
        });
    },

    getAllComment: function(req, res){
        models.Comment.findAll().then(result => {
            res.status(200).json(result);
        }) .catch(error => {
            res.status(500).json({
                message: 'Something went wrong'});
        });
    },
    updateComment : function(req,res){
        const id = req.params.id;
        const updatedComment ={
            content: req.body.content,
        }

        const publicationId = req.params.publicationId;
        const userId = req.params.userId;

        models.Comment.update(updatedComment, {where: {id : id, publicationId :publicationId, userId: userId}})
        .then(result => {
            res.status(200).json({
            message:"publication updated successfully",
            post: updatedComment
        });
    }).catch(error => {
        res.status(200).json({
            message: "Somenthing went wrong",
            error: result
        });
    })
    },
    destroyComment: function(req, res){
        const id = req.params.id; 
        const userId = req.params.userId;
        const publicationId = req.params.publicationId;

        models.Comment.destroy({where: {id: id, userId: userId, publicationId: publicationId}})
        .then(result => {
            res.status(200).json({
            message:"Comment deleted successfully"});
    }).catch(error => {
        res.status(200).json({ message: "Somenthing went wrong"});
    })
    }

}