var User = function(Mongoose) {
    var schema = Mongoose.Schema({
        name: String,
        email: String,
        username: String,
        password: String,
        type: Number
    });

    var User = Mongoose.model("User", schema);
    return User;
};

module.exports = User;