/**
 * Created by hyfy on 14-9-9.
 */

/*=============================================
=            从1.0迁移过来            =
=============================================*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GoodsSchema = new Schema({
    price:{
        type:Number,
        default: 0
    },
    property:{
        type:String,
        default: ''
    },
    label:{
        type:String,
        default:''
    },
    link:{
        type:String,
        default:''
    },
    role:{
        type:String,
        default:'student'
    },
    gender:{
        type:String,
        default:'male'
    }
});

mongoose.model('Goods', GoodsSchema);