var ListRouter = function(app, Mongoose) {
	var List = Mongoose.models.List;
	var User = Mongoose.models.User;

	/**
	 * Get all lists.
	 */
	app.get("/lists", function(request, response) {
		List.find().populate("users").exec(function(error, result) {
			response.status(200).json(result);
		});
	});

	/**
	 * Save a new list
	 */
	app.post("/list", function(request, response) {
		console.log(request.body);
		User.find({_id: {$in: request.body.users}}, function(error, result) {
			if ( error ) {
				response.status(500).json(error);
			} else {
				var list = new List({
					title: request.body.title,
					owner: request.body.owner,
					status: request.body.status,
					created: request.body.created,
					deadline: request.body.deadline,
					eventDate: request.body.eventDate,
					users: result,
					products: request.body.products,
					event: request.body.event
				});
				list.save(function(error, result) {
					if (error) {
						response.status(500).json(error);
					} else {
						response.status(200).json(result);
					}
				});
			}
		});
	});
	/**
	* Edit a list
	*/
	app.put("/list/:id", function(request, response) {
		List.findOne({_id: request.params.id}, function(error, result) {
			if (error || !result) {
				response.status(200).json(result);
			} else {
				result.title = request.body.title,
				result.owner = request.body.owner,
				result.status = request.body.status,
				result.created = request.body.created,
				result.deadline = request.body.deadline,
				result.users = request.body.users,
				result.products = request.body.products,
				result.event = request.body.event

				result.save(function(error, result) {
					response.status(200).json(result);
				});
			}
		});
	});

	app.delete("/list/:id", function(request, response) {
		List.remove({_id: request.params.id}, function(error, result) {
			response.status(200).json(result);
		});
	});

	/* Delete all */
	app.delete('/lists', function(request, response) {
		List.remove(function(error, result) {
			response.status(200).json(result);
		});
	});

	return this;
};

module.exports = ListRouter;
