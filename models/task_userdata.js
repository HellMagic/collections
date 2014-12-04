/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*========================
=         说明              =
a.这里不单单有为了用户数据组织的scopeId，还有为统计使用的对于scopeId映射的course object的ref，这样不需要sync course，而通过populate直接获取
========================*/

var TaskUserdataSchema = new Schema({
	topic: { type: ObjectId, ref: 'Topic' },
	chapter: { type: ObjectId, ref: 'Chapter' },
	isFinished: {
		type: Boolean,
		default: false
	},
	isPassed: {
		type: Boolean,
		default: false
	},
	level: {
		score: Number,
		title: String
	},
	activitiesUserdata: [{ type: ObjectId, ref: 'ActivityUserdata'}],
	createdBy: {
		type: Date,
		default: Date.now()
	},
	updatedBy: {
		type: Date,
		default: Date.now()
	},
	from: {
		type: String,
		enum: ['pc', 'mobile'],
		default: 'pc'		
	}	
});

mongoose.model('TaskUserdata', TaskUserdataSchema);