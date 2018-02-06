var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 99
    },
    email: { // TODO: Need to add email validation
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 99
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 99
    },
    profilePic: {
        type: String
    }
});

// Override 'toJSON' to prevent the password from being returned with the user
userSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            id: ret._id,
            email: ret.email,
            name: ret.name,
            profilePic: ret.profilePic
        };
        return returnJson;
    }
});

userSchema.methods.authenticated = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res ? this : false);
        }
    });
}

// Mongoose's version of a beforeCreate hook
userSchema.pre('save', function(next) {
    var hash = bcrypt.hashSync(this.password, 10);
    // store the hash as the user's password
    this.password = hash;
    next();
});

var User = mongoose.model('User', userSchema);

//text schema for users to store their saved documents
var textSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content: String
});

var twetSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    handle: String
});

var Text = mongoose.model('Text', textSchema);
var Twet = mongoose.model('Twet', twetSchema);

module.exports = {
    User: User,
    Text: Text,
    Twet: Twet
};

// module.exports = User;