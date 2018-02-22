module.exports = function (grunt, options) {

    grunt.log.writeln(String('Сборка...').cyan);

    return {
        'default': [
            'copy:images',
            'copy:html',
            'less:prod'
        ]
    };
};

