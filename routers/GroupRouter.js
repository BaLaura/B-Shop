var GroupRouter = function (app, Mongoose){
	var Group = Mongoose.models.Group
	app.get("/groups/:id", function(request, response) {
		Group.find({accountId: request.params.id}, function(error, result) {
			response.status(200).json(result);
		})
	});

	app.get("/groups", function(request, response) {
		Group.find(function(error, result) {
			response.status(200).json(result);
		});
	});
	app.get("/group/:id", function(request, response) {
		Group.findOne({_id: request.params.id}, function(error, result) {
			response.status(200).json(result);
		});
	});

	app.post("/group", function(request, response) {
		var group = new Group({
			name: request.body.name,
			users: request.body.users,
			owner: request.body.owner

		});

		skill.save(function(error, result) {
			response.status(200).json(result);
		});
	});
	app.put("/group/:id", function(request, response) {
		Group.findOne({_id: request.params.id}, function(error, result) {
			if (error || !result) {
				response.status(200).json(result);
			} else {
				result.name = request.body.name;
				result.users = request.body.users;
				result.owner = request.body.owner;
				result.save(function(error, result) {
					response.status(200).json(result);
				});
			}
		});
	});

	app.delete("/group/:id", function(request, response) {
		User.remove({_id: request.params.id}, function(error, result) {
			response.status(200).json(result);
		});
	});
};

module.exports = GroupRouter;
