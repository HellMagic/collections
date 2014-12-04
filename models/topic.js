/**
 *
 * @authors HellMagic
 * @version 1.0
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*==========================
=            说明            =
a.requirements依赖的知识点的id array
==========================*/
var TopicSchema = new Schema({
    title: String,
    description: String,
    chapter: { type: ObjectId, ref: 'Chapter' },
    requirements: [String],
    tasks: [{ type: ObjectId, ref: 'Task' }]
});

mongoose.model('Topic', TopicSchema);