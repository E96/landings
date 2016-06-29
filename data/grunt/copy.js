module.exports =  {
	images: {
		nonull: true,
		expand: true,
		cwd: 'src/img',
		src: [ '**' ],
		dest: 'dist/img'
	},
	html: {
		nonull: true,
		expand: true,
		cwd: 'src',
		src: [ 'index.html' ],
		dest: 'dist'
	}

};