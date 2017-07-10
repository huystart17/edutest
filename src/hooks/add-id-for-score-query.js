// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
	return function (hook) {

		// Hooks can either return nothing or a promise
		// that resolves with the `hook` object for asynchronous operations
		return hook.app.service('api/score')
		           .find({query: {userId: hook.data.userId}})
		           .then(result => {
			           console.log(hook.data)
//			           Object.assign(hook.data, {$inc: {total: hook.params.score}})
			           if (result.data.length > 0) {
				           return result.data[ 0 ]
			           } else {
				           return hook.app.service('api/score').create(
					           {
						           userId  : hook.data.userId,
						           userName: hook.data.userName
					           })
			           }

		           })
		           .then(score => hook.id = score._id)
		           .then(() => hook)
			;
	};
};
