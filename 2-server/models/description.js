const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reference'
    },
    definition: {
        type: String,
        required: true
    }, 
    impact: {
        type: String
    }, 
    empiricalevidence: {
        type: Boolean,
        default: false
    },
    practitionersinvolved: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Description', schema)