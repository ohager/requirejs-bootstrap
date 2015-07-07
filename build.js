// build configuration for requirejs optimizer
{
    appDir: './',
    baseUrl: './js/app',
    skipDirOptimize: true,
    removeCombined: true,
    optimizeCss: 'standard',
    fileExclusionRegExp: /^node_modules$/,
    waitSeconds : 0,
    paths : {
        lib: '../lib'
    },
    dir: './dist',
    modules :[
        {
            //module names are relative to baseUrl/paths config
            name: 'main',
            include: [
                'main'
            ]
        }
    ]
}