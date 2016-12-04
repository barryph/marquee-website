module.exports = (app) => {
	const routers = {
		index: require('./views/index'),
	};

	app.use('/', routers.index);
};