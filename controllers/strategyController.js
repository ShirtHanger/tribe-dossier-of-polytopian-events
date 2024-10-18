/* Here's how you import the childs database into our controller */

const { Child, Parent } = require('../models')

// INDEX - app.get
const getAllChilds = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const childs = await Child.find()
        res.json(childs) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getChildById = async (req, res) => {
    try {
        const { id } = req.params
        const child = await Child.findById(id)
        if (child) {
            return res.json(child)
        } return res.status(404).send(`Child with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That child doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createChild = async (req, res) => {
    try {
        const child = await new Child(req.body) /* Enables ability to update via tools like Thunderclient */
        await child.save()
        return res.status(201).json({child});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateChild = async (req, res) => {
    try {
        let { id } = req.params;
        let child = await Child.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (child) {
            return res.status(200).json(child)
        }
        throw new Error("Child not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteChild = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Child.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Child deleted");
        }
        throw new Error("Child not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllChilds,
    getChildById,
    createChild,
    updateChild,
    deleteChild
}