/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*============================================
=            说明
Tag系统，还有许多需要具体扩展的            =
============================================*/

var TagSchema = new Schema({
	name: String,
	level: Number
});

mongoose.model('Tag', TagSchema);