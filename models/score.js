/**
 * Created by hyfy on 14-8-29.
 */

/*=============================================
=            从1.0迁移过来            =
=============================================*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
    totalScore:{
        type:Number,
        default: 0
    },
    exchangeableScore:{
        type:Number,
        default: 0
    },
    sortScore:{
        type:Number,
        default: 0
    },
    coin:{
        type:Number,
        default: 0
    },
    username:{
        type:String
    },
    user_id:{
        type:String
    },
    killNum:{
        type:Number,
        default: 0
    },
    achieve:{
        type: Array,
        default: []
    },
    avatar: {
        type:String,
        default:'/webapp/common/resources/img/studentm.png'
    },
    name: {
        type:String,
        default:''
    }
});
var Score = mongoose.model('Score', ScoreSchema);