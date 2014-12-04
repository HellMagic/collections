/**
 *
 * @authors HellMagic
 * @version 1.0
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*========================
=                        =
a.说明，当下可能用到embed的school和user信息比较多，如果需要详细信息那么再使用populate给出, 只不过向一个班级中添加学生会稍微多写点代码

	belogs_to_school: {
		schoolId: String,
		name: String
	},
	have_many_students: [{
		studentId: String,
		name: String
	}],
========================*/

var RoomSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	grade: String,
	school: { type: ObjectId, ref: 'School' },
	users: [{ type: ObjectId, ref: 'User' }]
});

mongoose.model('Room', RoomSchema);