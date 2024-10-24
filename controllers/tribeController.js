/* Here's how you import the tribes database into our controller */

// If only ONE item type, you can do this 
// const Tribe = require('../models/tribe');

const { Uncle, Child, Tribe } = require('../models')

// INDEX - app.get
const getAllTribes = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const tribes = await Tribe.find()
        res.json(tribes) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
const getTribeById = async (req, res) => {
    try {
        const { id } = req.params
        const tribe = await Tribe.findById(id)
        if (tribe) {
            return res.json(tribe)
        } return res.status(404).send(`Tribe with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That tribe doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const getTribeByName = async (req, res) => {
    try {
        const tribeName = req.params.name
        const tribe = await Tribe.find({ name: tribeName })
        if (tribe) {
            return res.json(tribe)
        } return res.status(404).send(`Tribe with name of ${tribeName} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That tribe doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}

const getTribeByFree = async (req, res) => {
    try {
        const tribes = await Tribe.find({ isFreeTribe: true })
        if (tribes) {
            return res.json(tribes)
        } return res.status(404).send(`Free tribes not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That tribe doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}

const getTribeByPaid = async (req, res) => {
    try {
        const tribes = await Tribe.find({ isFreeTribe: false })
        if (tribes) {
            return res.json(tribes)
        } return res.status(404).send(`Paid tribes not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That tribe doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}

const getTribeByHuman = async (req, res) => {
    try {
        const tribes = await Tribe.find({ isSpecialTribe: false })
        if (tribes) {
            return res.json(tribes)
        } return res.status(404).send(`Human tribes not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That tribe doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}
const getTribeBySpecial = async (req, res) => {
    try {
        const tribes = await Tribe.find({ isSpecialTribe: true })
        if (tribes) {
            return res.json(tribes)
        } return res.status(404).send(`Special tribes not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That tribe doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}


// CREATE - app.post
const createTribe = async (req, res) => {
    try {
        const tribe = await new Tribe(req.body) /* Enables ability to update via tools like Thunderclient */
        await tribe.save()
        return res.status(201).json({tribe});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateTribe = async (req, res) => {
    try {
        let { id } = req.params;
        let tribe = await Tribe.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (tribe) {
            return res.status(200).json(tribe)
        }
        throw new Error("Tribe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteTribe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tribe.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Tribe deleted");
        }
        throw new Error("Tribe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTribes,
    getTribeById,
    createTribe,
    updateTribe,
    deleteTribe,

    getTribeByName,
    getTribeByHuman,
    getTribeBySpecial,
    getTribeByFree,
    getTribeByPaid
}