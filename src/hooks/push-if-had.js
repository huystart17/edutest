// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
	return function (hook) {
		// Hooks can either return nothing or a promise
		// that resolves with the `hook` object for asynchronous operations
		let hadScoreObject = false
		return Promise.resolve(hook)
		              .then(hook => {
			              return hook.app.service('score').find({query: {userId: hook.params.user._id}})
			                         .then(result => {
				                         result.data.length > 0 ? hadScoreObject = true : ''
			                         })
			                         .then(()=>hook.app.service('score').create())

		              })
			;
	};
};
