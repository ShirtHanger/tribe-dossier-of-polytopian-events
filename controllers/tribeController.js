/* Here's how you import the parents database into our controller */

// If only ONE item type, you can do this 
// const Parent = require('../models/parent');

const { Uncle, Child, Parent } = require('../models')

// INDEX - app.get
const getAllParents = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const parents = await Parent.find()
        res.json(parents) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getParentById = async (req, res) => {
    try {
        const { id } = req.params
        const parent = await Parent.findById(id)
        if (parent) {
            return res.json(parent)
        } return res.status(404).send(`Parent with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That parent doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createParent = async (req, res) => {
    try {
        const parent = await new Parent(req.body) /* Enables ability to update via tools like Thunderclient */
        await parent.save()
        return res.status(201).json({parent});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateParent = async (req, res) => {
    try {
        let { id } = req.params;
        let parent = await Parent.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (parent) {
            return res.status(200).json(parent)
        }
        throw new Error("Parent not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteParent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Parent.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Parent deleted");
        }
        throw new Error("Parent not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllParents,
    getParentById,
    createParent,
    updateParent,
    deleteParent
}