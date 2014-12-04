/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var deepPopulate = require('mongoose-deep-populate');

var TaskSchema = new Schema({
    name: String,
    type: String,
    topic: { type: ObjectId, ref: 'Topic' },
    chapterId: { type: ObjectId, ref: 'Chapter' },
    activities: [{type: ObjectId, ref: 'Activity'}]
});
TaskSchema.plugin(deepPopulate);

mongoose.model('Task', TaskSchema);
