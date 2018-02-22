module.exports =  {
	less: {
		files: [
			'src/less/*.less'
		],
		tasks: ['less:dev']
	},
	html: {
		files: [
			'src/index.html'
		],
		tasks: ['copy:html']
	}
};