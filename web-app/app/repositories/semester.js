const Semester = require('../models/semester')

module.exports.create = async function(semester) {
    try {
        return await Semester.create(semester)
    } catch(error) {
        throw error
    }
}

module.exports.getAll = async function(author) {
    try {
        return await Semester.find({'author': author})
    } catch(error) {
        throw error
    }
}

module.exports.getById = async function(author, id) {
    try {
        return await Semester.findOne({'_id': id, 'author': author})
    } catch(error) {
        throw error
    }
}

module.exports.updateById = async function(author, id, set) {
    try {
        return await Semester.update({'_id': id, 'author': author}, { '$set': set})
    } catch(error) {
        throw error
    }
}