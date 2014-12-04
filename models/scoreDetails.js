/**
 * Created by hyfy on 14-8-29.
 */

/*=============================================
=            从1.0迁移过来            =
=============================================*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreDetailsSchema = new Schema({
    timestamp:{
        type:Date,
        default:Date.now
    },
    scoreType:{
        type:String
    },
    score:{
        type:Number
    },
    username:{
        type:String
    },
    lesson_id:{
        type:String
    }
});

mongoose.model('ScoreDetails', ScoreDetailsSchema);