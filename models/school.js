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
a.一些没有填写的field: cache, port, host, lhost, lport
b.是否需要在这里也添加 [BasicRoomSchema] ？？？待定
==========================*/

var SchoolSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	rooms: [{
		type: ObjectId,
		ref: 'Room'
	}]
});

mongoose.model('School', SchoolSchema);