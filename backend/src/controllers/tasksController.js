const taskModells = require('../models/tasksModels');

const getAll = async (req, res) => {

    const tasks = await taskModells.getAll();

    return res.status(200).json({tasks});
};

module.exports ={
    getAll,
}