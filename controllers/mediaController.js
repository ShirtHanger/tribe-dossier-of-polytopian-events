/* Here's how you import the medias database into our controller */

const { Media, Culture, Tribe } = require('../models')

// INDEX - app.get
const getAllMedias = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const medias = await Media.find()
        res.json(medias) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getMediaById = async (req, res) => {
    try {
        const { id } = req.params
        const media = await Media.findById(id)
        if (media) {
            return res.json(media)
        } return res.status(404).send(`Media with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That media doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

const getMediaByName = async (req, res) => {
    try {
        const tribeName = req.params.name
        const media = await Media.find({ tribe_name: tribeName })
        if (media) {
            return res.json(media)
        } return res.status(404).send(`Media for a tribe with the name ${tribeName} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That media doesn't exist`)
        }
        return res.status(500).send(error.message)

    }
}

// CREATE - app.post
const createMedia = async (req, res) => {
    try {
        const media = await new Media(req.body) /* Enables ability to update via tools like Thunderclient */
        await media.save()
        return res.status(201).json({media});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateMedia = async (req, res) => {
    try {
        let { id } = req.params;
        let media = await Media.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (media) {
            return res.status(200).json(media)
        }
        throw new Error("Media not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Media.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Media deleted");
        }
        throw new Error("Media not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllMedias,
    getMediaById,
    createMedia,
    updateMedia,
    deleteMedia,

    getMediaByName
}