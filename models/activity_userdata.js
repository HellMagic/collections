var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*============================
=            TODO            =
a.Schema中可以通过添加progress做扩展:
progress: {
	problems: [String],
	videos: [String]
}
b.关于level待定
c.from: 表明pc or mobile的用户数据，默认pc，在存储的时候需要init完成是'pc'or'mobile'，如果在mobile还有server那么可以直接封装request里，如果mobile上不再有proxy server那么通过在web server中拿到request的userAgent来判断
是否是mobile，从而对'from'域做赋值. 其他所有的userdata都是如此
============================*/

var ActivityUserdataSchema = new Schema({
	task: { type: ObjectId, ref: 'Task' },
	topic: { type: ObjectId, ref: 'Topic' },
	chapter: { type: ObjectId, ref: 'Chapter' },
	isFinished: {
		type: Boolean,
		default: false
	},
	isPassed: {
		type: Boolean,
		default: false
	},
	level: {
		score: {
			type: Number,
			default: 0
		},
		title: String
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
		default: Date.now()
	},
	from: {
		type: String,
		enum: ['pc', 'mobile'],
		default: 'pc'		
	}	
});


/*========================
=        TODO                =
a.暂时先写在这里，后面可能会封装成plugin，或者找“轮子”
========================*/

ActivityUserdataSchema.pre('save', function(next){
	now = new Date();
	this.updatedAt = now;
	if ( !this.createdAt ) {
		this.createdAt = now;
  	}
  	next();
});

mongoose.model('ActivityUserdata', ActivityUserdataSchema);