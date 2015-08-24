var List = function(Mongoose) {
	var schema = Mongoose.Schema({
       title: String,
       owner: ObjectId,
       status: int,
       created: Date,
       deadline: Date,
       users: [Mongoose.Schema.Types.ObjectId],
       products: [{
       		name: String,
       		quantity: int,
       		comment: {
       			userID: ObjectId,
       			text: String,
       			created: Date
       		}
       }],
       event: Date
	});

	var List = Mongoose.model("List", schema);
    return List;
};

module.exports = List;
