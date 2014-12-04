/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var VideoUserdataSchema = new Schema({
	header: {},
	eventName: String,
	eventValue: {},
	video: { type: ObjectId, ref: 'Video' },
	activity: { type: ObjectId, ref: 'Activity' },
	task: { type: ObjectId, ref: 'Task' },
	topic: { type: ObjectId, ref: 'Topic' },
	chapter: { type: ObjectId, ref: 'Chapter' },
	user: { type: ObjectId, ref: 'User' },
	room: { type: ObjectId, ref: 'Room' },
	school: { type: ObjectId, ref: 'School' },
	tag: { type: ObjectId, ref: 'Tag' },
	createdBy: {
		type: Date,
		default: Date.now()
	},
	from: {
		type: String,
		enum: ['pc', 'mobile'],
		default: 'pc'
	}
});

mongoose.model('VideoUserdata', VideoUserdataSchema);