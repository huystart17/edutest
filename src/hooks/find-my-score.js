// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
	return function (hook) {

		// Hooks can either return nothing or a promise
		// that resolves with the `hook` object for asynchronous operations
		return new Promise((resolve, reject) => {
			resolve(hook.params.user._id)
		})
			.then(userId => hook.app.service('api/score').find({query: {userId: userId}}))
			.then(result => hook.result = result.data[ 0 ])
			.then(() => hook);
	};
};
