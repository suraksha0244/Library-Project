const mongoose = require('mongoose');

const LibraryUserSchema = mongoose.Schema({
    user_id: {
        type: 'string',
        required: true,
        unique: true,
    },
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    role: {
        type: 'string',
        required: true,
        default: 'user',
    },
});

module.exports = mongoose.model('LibraryUser', LibraryUserSchema);
