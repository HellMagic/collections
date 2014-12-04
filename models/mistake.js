/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var timestamp = require('mongoose-timestamp');
/*====================================================
=            userAnswer是choiceId的String数组            =
====================================================*/

var MistakeSchema = new Schema({
	userId: String,
	userAnswer: [String],
	problem: { type: ObjectId, ref: 'Problem' }
});
MistakeSchema.plugin(timestamp);

mongoose.model('Mistake', MistakeSchema);