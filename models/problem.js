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
a.没有包含的字段： isSurvey
b.这里的problem不包含在hyperVideo中的problem，二者虽然都是problem，但是性质很不一样：题库中的题目大都是练习性质的，很视频不太严格绑定，而交互中的题目几乎都是随着当前正在播放的视频而出现的。而且二者的field有很大的不同，比如hyperVideo中还会有根据当前选择的情况而跳转视频
==========================*/
var ChoiceSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        default: false
    },
    parentId: String
});

var ProblemSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['single', 'multi', 'blank'],        
    },
    body: {
        type: String,
        required: true
    },
    tags: [{ type: ObjectId, ref: 'Tag'}],
    correct_answer: [String],
    choices: [ChoiceSchema],
    level: String,
    levelType: String,
    prompt: String,
    explanation: String
});

mongoose.model('Problem', ProblemSchema);