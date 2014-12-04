/**
 * Created by solomon on 14-6-28.
 */

/*=============================================
=            从1.0迁移过来            =
=============================================*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Feedback = new Schema({
    user: Schema.Types.Mixed,
    content: String,
    pageInfo:{
        url:{ type: String, required: true },
        videoId: String,
        problemId: String,
        problemBody:String
    },
    contactInfo:{
        phone: String,
        email: String,
        qq: String
    },
    time: { type: Date, default: Date.now  },
    sendFail: { isFail:Boolean,reason:String }
});

mongoose.model('Feedback',Feedback);