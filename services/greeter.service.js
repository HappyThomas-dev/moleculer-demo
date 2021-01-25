"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		hello(ctx) { // function 식으로 바로 받을수 있다??
			this.logger.info('greeter-hello', this.name, this.broker.nodeID, this.broker.instanceID);

			const payload = `Hello from greeter@${this.broker.nodeID}`
			ctx.emit('Hello.called')

			return payload;
		},
		// hello:{   // path 식으로 처리하기
		// 	rest: {
		// 		method: "GET",
		// 		path: "/hello"
		// 	},
		// 	async handler() {
		// 		return "Hello Moleculer";
		// 	}
		// },

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
