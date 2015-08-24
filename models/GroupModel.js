var Group = function(Mongoose) {
	var schema = Mongoose.Schema({
		name: String,
		users: [Mongoose.Schema.Types.ObjectId],
		owner: Number 
    });

    var Group = Mongoose.model("Group", schema);
    return Group;
};

module.exports = Group;