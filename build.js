// build configuration for requirejs optimizer
{
    appDir: './',
    baseUrl : './js',
    skipDirOptimize: true,
    removeCombined: true,
    optimizeCss: 'standard',
    fileExclusionRegExp: /^node_modules$/,
    waitSeconds : 0,
    paths : {
        app: './app',
        common: './app/common'
    },
    dir: './dist',
        modules : [
            {
                //module names are relative to baseUrl
                name: 'app/common',
                //List common dependencies here. Only need to list
                //top level dependencies, "include" will find
                //nested dependencies.
                include: [
                    ]
            }
        ]
}