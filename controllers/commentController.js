/* Here's how you import the comments database into our controller */

const { Comment, Media, Culture, Tribe } = require('../models')

// INDEX - app.get
const getAllComments = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const comments = await Comment.find()
        res.json(comments) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getCommentById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)
        if (comment) {
            return res.json(comment)
        } return res.status(404).send(`Comment with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That comment doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const getCommentByName = async (req, res) => {
    try {
        const tribeName = req.params.name
        const comment = await Comment.find({ tribe_name: tribeName })
        if (comment) {
            return res.json(comment)
        } return res.status(404).send(`Comment for a tribe with the name ${tribeName} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That comment doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}

// CREATE - app.post
const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body) /* Enables ability to update via tools like Thunderclient */
        await comment.save()
        return res.status(201).json({comment});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateComment = async (req, res) => {
    try {
        let { id } = req.params;
        let comment = await Comment.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (comment) {
            return res.status(200).json(comment)
        }
        throw new Error("Comment not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Comment deleted");
        }
        throw new Error("Comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,

    getCommentByName
}