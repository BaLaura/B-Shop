var UserRouter = function(app, Mongoose) {
	var User = Mongoose.models.User;

	app.get("/users", function(request, response) {
		User.find(function(error, result) {
			response.status(200).json(result);
		});
	});

	/**
	 * Get an user.
	 */
	app.get("/user/:id", function(request, response) {
		User.findOne({_id: request.params.id}, function(error, result) {
			response.status(200).json(result);
		});
	});

	app.post("/user/name", function(request, response) {
		User.find({ name: {$regex : new RegExp("^" + request.body.name, "i")}}, function(error, result) {
			response.status(200).json(result);
		});
	});

	/**
	 * Create a new user.
	 */
	app.post("/user", function(request, response) {
		var user = new User({
			name: request.body.name,
			username: request.body.username,
			email: request.body.email,
			password: request.body.password,
			type: request.body.type
		});

		user.save(function(error, result) {
			response.status(200).json(result);
		});
	});

	/**
	 * Update an user.
	 */
	app.put("/user/:id", function(request, response) {
		User.findOne({_id: request.params.id}, function(error, result) {
			if (error || !result) {
				response.status(200).json(result);
			} else {
				result.name = request.body.name;
				result.email = request.body.email;
				result.username = request.body.username;
				result.password = request.body.password;
				result.type = request.body.type;
				result.save(function(error, result) {
					response.status(200).json(result);
				});
			}
		});
	});

	app.delete("/user/:id", function(request, response) {
		User.remove({_id: request.params.id}, function(error, result) {
			response.status(200).json(result);
		});
	});
};

module.exports = UserRouter;