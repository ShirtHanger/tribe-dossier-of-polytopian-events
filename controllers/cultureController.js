

const { Comment, Media, Culture, Tribe } = require('../models')

// INDEX - app.get
const getAllCultures = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const cultures = await Culture.find()
        res.json(cultures) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getCultureById = async (req, res) => {
    try {
        const { id } = req.params
        const culture = await Culture.findById(id)
        if (culture) {
            return res.json(culture)
        } return res.status(404).send(`Culture with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That culture doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const getCultureByTribeName = async (req, res) => {
    try {
        const tribeName = req.params.name
        const culture = await Culture.find({ tribe_name: tribeName })
        if (culture) {
            return res.json(culture)
        } return res.status(404).send(`Culture for a tribe with the name ${tribeName} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That culture doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}

// CREATE - app.post
const createCulture = async (req, res) => {
    try {
        const culture = await new Culture(req.body) /* Enables ability to update via tools like Thunderclient */
        await culture.save()
        return res.status(201).json({culture});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateCulture = async (req, res) => {
    try {
        let { id } = req.params;
        let culture = await Culture.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (culture) {
            return res.status(200).json(culture)
        }
        throw new Error("Culture not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteCulture = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Culture.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Culture deleted");
        }
        throw new Error("Culture not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCultures,
    getCultureById,
    createCulture,
    updateCulture,
    deleteCulture,

    getCultureByTribeName
}