"use strict";

const axios = require("axios");

// Assuming terraform will create the env var when it makes the lambda resource?
const BACKEND_INGRESS_URL = process.env.BACKEND_INGRESS_URL;

exports.handler = async (event) => {
	const { name, message } = event["params"]["querystring"];

	try {
		await axios.post(`${BACKEND_INGRESS_URL}/new-post/?name=${name}&message=${message}`);

		return {
			statusCode: 201,
			headers: {
				"Content-Type": "text/html; charset=utf-8"
			},
			body: "<p>Hello world!</p>"
		};
	} catch (err) {
		return {
			statusCode: 400,
			headers: {
				"Content-Type": "text/html; charset=utf-8"
			},
			body: "<p>Hello world!</p>"
		};
	}
};