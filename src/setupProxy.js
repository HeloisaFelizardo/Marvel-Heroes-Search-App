const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'https://gateway.marvel.com',
			changeOrigin: true,
			pathRewrite: {
				'^/api': '',
			},
		}),
	);
};
