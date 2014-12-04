/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var deepPopulate = require('mongoose-deep-populate');
/*==========================
=            说明            =
a.icon当前String依然代表是存储在七牛上的一个url地址, 可以考虑使用二进制存储
b.type暂时先分为online, offline, test
==========================*/
var ChapterSchema = new Schema({
    title: String,
    type: String,
    description: String,
    icon: String,
    Topics: [{ type: ObjectId, ref: 'Topic' }]
});

ChapterSchema.plugin(deepPopulate);

mongoose.model('Chapter', ChapterSchema);