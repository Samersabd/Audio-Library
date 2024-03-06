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
    },
    lastSongAddedAt: {
        type : Date,
    }
}
,
    {timestamps:true}
);

module.exports = mongoose.model('Album', albumSchema );
