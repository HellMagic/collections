/**
 *
 * @authors HellMagic
 * @version 1.0
 */

/*=============================================
=            从1.0迁移过来            =
=============================================*/
var mongoose = require('mongoose');
var querystring = require('querystring');
var Schema = mongoose.Schema;

var VerificationSchema = new Schema({
    username: String,
    code: String,
    connect: String,
    ttl: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Basic info to identify the current authenticated user in the app
VerificationSchema.virtual('url').get(function () {
    return '/verifications/verify?'+querystring.stringify({code:this.code, username:this.username});
});

mongoose.model('Verification', VerificationSchema);
