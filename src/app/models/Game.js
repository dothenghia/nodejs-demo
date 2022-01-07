const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Game = new Schema(
    {   
        _id : {type : Number},
        name: { type: String, required: true },
        description_1: { type: String, required: true },
        description_2: { type: String, maxlength: 1000 },
        image_thumbnail: { type: String, required: true },
        slug: { type: String, slug: 'name', unique:true },
    },
    {
        _id : false,
        timestamps : true,
    },
);

// Add plugin
mongoose.plugin(slug);
Game.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods : 'all',
});

module.exports = mongoose.model('Game', Game);
