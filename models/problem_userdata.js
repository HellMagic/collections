/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*========================
=           说明：             =
a.这里不需要user和room的ref，因为这两个信息在dashboard中都可以而且需要都先获取到，然后通过user_id去做mpa映射就可以了，room更是只是为了scope一下当前班级有哪些学生，这个通过scopeId就可以做到，room本身
的信息在老师登陆后就知道teacher这个user.rooms了，所以只需要对problem body做ref
b.eventValue类型不确定--String, Boolean, Number...，所以设置为Mixed
c,scopeId（其实是ref）是个全集，能写多少写多少，mongoose对于没有的是不会存的，mongo对于没有的也不会影响查询，这就是NoSQL Schema灵活带来的好处
d.所有的userdata都会有createdAt和updatedAt两个field，通过plugin实现，不显示在定义在Schema中
========================*/
var ProblemUserdataSchema = new Schema({
	header: {},
	eventName: String,
	eventValue: {},
	problem: { type: ObjectId, ref: 'Problem'},
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

mongoose.model('ProblemUserdata', ProblemUserdataSchema);