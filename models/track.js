/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*=====================================
=            此表主要存储用户的行为数据---当作垃圾桶            =
=====================================*/
var TrackSchema = new Schema({
	header: {},
	eventKey: String,
	eventValue: {},
	problem: { type: ObjectId, ref: 'Problem'},
	video: { type: ObjectId, ref: 'Video' },
	activity: { type: ObjectId, ref: 'Activity' },
	task: { type: ObjectId, ref: 'Task' },
	topic: { type: ObjectId, ref: 'Topic' },
	chapter: { type: ObjectId, ref: 'Chapter' },
	user: { type: ObjectId, ref: 'User' },
	room: { type: ObjectId, ref: 'Room' },
	school: { type: ObjectId, ref: 'School' },
	tag: { type: ObjectId, ref: 'Tag' },
	from: {
		type: String,
		enum: ['pc', 'mobile'],
		default: 'pc'
	}
});

mongoose.model('Track', TrackSchema);