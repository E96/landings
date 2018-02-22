module.exports =  {
	dev: {
		src    : [
			'src/less/styles.less'
		],
		dest   : "dist/css/styles.css"
	},

	prod: {
		options: {
			compress	: true,
			cleancss	: true

		},
		src    : [
			'src/less/styles.less'
		],
		dest   : "dist/css/styles.css"
	}
};