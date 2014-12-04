/**
 *
 * @authors HellMagic
 * @version 1.0
 */

var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
/*==========================
=            说明            =
a.不要过度给field添加“unique: true”，因为这样会为它自动添加索引，而索引对于任何修改的操作都有性能问题，比如下面的：userName, userEmail, userPhone
b.当前UserSchema并没有包含所有之前旧Schma中所有的field，有些是已经确定没有必要，有些是不太清楚是否还需要，需要后面review后再做处理：beingWatched, q, survey1, ticket, apps, remark
c.设计原则：
    (1).尽量把读写比高的内容都放在一个schema中，做到Enbed的最大效益化，提高性能
    (2).做到类型有组织化，这样可以在响应的时候可以只返回需要的东西，如果当前组织的不太符合前端数据需求那么可以通过virtual来解决
    (3).做到结构层次化－－而不是所有的field都暴露为第一层级，这样就加少了查询的时候遍历的个数，提高性能
    (4).这里单独抽离basicXXXSchema的目的是为了重用，如果以后要单独创建为collection也可以方便转换
d.room和school到底是用ref还是用embed的方式，倾向于先用embed，考虑到几乎没有要拿room details的情况，如果有无非也就多发一次request

TODO:
a.学校能使用ref的前提是在填写学校的地方（比如完善资料）只能从以创建存在的学校中选取，而不是通过在input中填写，想写什么就写什么（school的列表我们已经有了）
==========================*/


//HelllMaigc TODO:
//  a.check the new schema, add third plugin to supoort
var UserSchema = new Schema({
    profile: {
        name: String,
        avatar: String,
        gender: {
            type: String,
            enum: ['male', 'female'],
            default: 'male'
        },
        grade: String
    },
    privacy: {
        username: {
            type: String,
            unique: true,
            require: true,
            match: /^[@\.a-zA-Z0-9_-]+$/
        },
        useremail: {
            type: String,
            sparse: true,
            lowercase: true,
            match: /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        },
        userphone: {
            type: String,
            sparse: true,
            match: /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/
        }
    },
    school: [{
        type: ObjectId,
        ref: 'School'
    }],
    rooms: [{
        type: ObjectId,
        ref: 'Room'
    }],
    hashed_password: String,
    salt: String,
    usefulData: {
        registDate: {
            type: Date,
            default: Date.now
        }
    },
    roles: [String],
    tempAttribute: {
        haveProfile: {
            type: Boolean,
            default: false
        },
        isTemp: {
            type: Boolean,
            default: false
        }
    }
});

/**
 * Virtuals
 * TODO: basic_info最起码去掉hash_password, salt(或者在查询代码里添加select选项也行)后的基本信息
 */

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password
    });

/**
 * Validations
 */

var validatePresenceOf = function(value) {
    return value && value.length;
};

/**
 * Methods
 */

/*UserSchema.methods.findSameName = function(cb) {
  return this.model('User').find({name: this.name}, cb);
};*/
UserSchema.methods = {

    /**
     * Authenticate
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */

    authenticate: function(plainText) {
        console.log('plainText: =' + plainText);
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */

    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + '';
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */

    encryptPassword: function(password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

/**
 * Statics
 */

UserSchema.statics = {

    /**
     * Load
     *
     * @param {Object} options
     * @param {Function} cb
     * @api private
     */

    load: function(options, cb) {
        //HellMagic TODO:重新返回的内容；查看序列化的问题
        options.select = options.select || '-hashed_password -salt';
        this.findOne(options.criteria)
            .select(options.select)
            .exec(cb);
    }
}

mongoose.model('User', UserSchema);
