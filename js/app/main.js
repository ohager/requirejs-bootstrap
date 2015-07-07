requirejs.config({
    appDir: './',
    baseUrl: './js/app',
    paths :    {
        lib: '../lib'
    }
});

requirejs(["application"]);
