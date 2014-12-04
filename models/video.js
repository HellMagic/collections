/**
 *
 * @authors HellMagic
 * @version 1.0
 */

/*==========================
=            说明            =
a.不需要区分是common video还是hyper video
==========================*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var hyperChoiceSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    is_correct: {
        type: Boolean,
        default: false
    },
    jumpVideo: {
        url: String
    }
});

var hyperProblemSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    show_time: Number,
    choices: [hyperChoiceSchema]
});

var VideoSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    type: String,
    tags: [String],
    description: String
});

mongoose.model('Video', VideoSchema);