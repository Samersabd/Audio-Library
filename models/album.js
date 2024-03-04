const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema ({
    name: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },
    showNbTracks: {
        type : Boolean,
        required: true
    },
    createdAt: {
        type : Date,
        required: true
    },
    updatedAt: {
        type : Date,
        required: false
    },
    lastSongAddedAt: {
        type : Date,
        required: false
    }
}
,
    {timestamps:true}
);

module.exports = mongoose.model('Album', albumSchema );
