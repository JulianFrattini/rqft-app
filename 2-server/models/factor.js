const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    id: {
        type: String,
        unique: true,
        required: true
    },
    reference: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reference'
    }],
    descriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Description'
    }],
    linguisticcomplexity: {
        type: String,
        enum: ['lexical', 'syntactic', 'semantic', 'pragmatic'],
        required: true
    },
    scope: {
        type: String,
        enum: ["Word", "Phrase", "Sentence", "Structured/tabular text", "User Story", "Use Case", "Requirement", "Section", "Document", "Global"],
        required: true
    },
    ambiguity: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    completeness: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    complexity: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    consistency: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    correctness: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    redundancy: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    relevancy: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    reusability: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    traceability: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    understandability: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    },
    verifiability: {
        type: String,
        enum: ['+', '', '-', '?'],
        required: true
    }
});

module.exports = mongoose.model('Factor', schema)