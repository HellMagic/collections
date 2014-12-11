/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

/*===========================================================================================
=            这里level使用了Number而不是String（'a', 'b'..）为了更直观的体现出等级的难度，虽然'a''b'..也可以排序            =
a.当activity类型是“挑战”的subtask的时候，此activity中的problems是带有level纬度的，这个纬度在编辑题目的时候会编辑进去，activity只需做好引用就可以了，当编辑的时候可以手动选择输入level或者在某一个定位level的activity
此activity是一个挑战task的subtask)下添加题目，会默认为此problem自动加上level--相当于批量对problem添加level tag
b.blood值是在这里默认填充，还是在course builder中默认填充?
c.这里video用videos数组会不会更好些，防止以后会把多个视频关联在一起
===========================================================================================*/

var ActivitySchema = new Schema({
    name: String,
    icon: String, // 缩略图
    task: { type: ObjectId, ref: 'Task' },
    problems: [{ type: ObjectId, ref: 'Problem' }],
    videos: [{ type: ObjectId, ref: 'Video' }],
    bloods: {
    	type: Number,
    	default: 3
    }
});

mongoose.model('Activity', ActivitySchema);