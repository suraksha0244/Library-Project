const mongoose = require('mongoose');

const LibraryRecipeSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true,
    },
    author: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    isbn: {
        type: 'string',
        required: true,
        unique: true,
    },
    genre: {
        type: 'string',
        required: true,
    },
    publication_date: {
        type: Date,
        required: true,
    },
    copies_available: {
        type: Number,
        required: true,
        default: 0,
    },
    total_copies: {
        type: Number,
        required: true,
        default: 0,
    },
    cover_image_url: {
        type: 'string',
        required: false,
    },
});

module.exports = mongoose.model("LibraryRecipe", LibraryRecipeSchema);
