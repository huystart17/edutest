const {authenticate} = require('feathers-authentication').hooks;

const addOwner = require('../../hooks/add-owner');

const addIdForScoreQuery = require('../../hooks/add-id-for-score-query');

const scorePatchEndResult = require('../../hooks/score-patch-end-result');

const findMyScore = require('../../hooks/find-my-score');

module.exports = {
	before: {
		all   : [ authenticate('jwt') ],
		find  : [],
		get   : [findMyScore()],
		create: [],
		update: [],
		patch : [ addIdForScoreQuery() ],
		remove: []
	},

	after: {
		all   : [],
		find  : [],
		get   : [],
		create: [],
		update: [],
		patch : [scorePatchEndResult()],
		remove: []
	},

	error: {
		all   : [],
		find  : [],
		get   : [],
		create: [],
		update: [],
		patch : [],
		remove: []
	}
};
