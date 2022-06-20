const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    },
});

userSchema.pre('save', function (next) {
    const user = this;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    next();
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}


const UserModel = mongoose.model('Users', userSchema);


module.exports = UserModel;
