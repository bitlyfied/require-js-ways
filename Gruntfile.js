module.exports = function (grunt) {
    
    var requireJsConfig = {
        appDir: 'dev',
        baseUrl: 'scripts',
        dir: 'prod',
        optimize: "none",
        keepBuildDir: true,
        skipDirOptimize: true,
        modules: [
            {
                name: 'common',
                include: [
                    'lib/app',
                    'lib/console'
                ]
            },
            
            {
                name: 'areas/homepage',
                exclude: ['common'],
                insertRequire: ['areas/homepage']
            },

            {
                name: 'areas/product',
                exclude: ['common'],
                insertRequire: ['areas/product']
            }

        ]
    }

    grunt.initConfig({
        requirejs: {
            compile: {
                options: requireJsConfig
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task.
    grunt.registerTask('default', ['requirejs']);

};
