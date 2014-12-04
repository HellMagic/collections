/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*============================
=            TODO            =
a.存id还是存ref取决于页面中是否要显示此path的详细信息还是只是一个可引导的路径button（whatever）
b.要不要resourceId取决于需要locate的精确度
============================*/
var SessionSchema = new Schema({
	loginDate: Date,
	currentPath: {
		chapter: { type: ObjectId, ref: 'Chapter' },
		topicId: { type: ObjectId, ref: 'Topic' },
		taskId: { type: ObjectId, ref: 'Task' },
		activityId: { type: ObjectId, ref: 'Activity' }
	}
});

mongoose.model('Session', SessionSchema);