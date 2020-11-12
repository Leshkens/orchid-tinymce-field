let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

if (mix.inProduction()) {
    mix.version();
}

mix
    .copyDirectory('./node_modules/tinymce/plugins', 'public/js/tinymce/plugins')
    .copyDirectory('./node_modules/tinymce/themes', 'public/js/tinymce/themes')
    .copyDirectory('./node_modules/tinymce/skins', 'public/js/tinymce/skins')
    .js('resources/js/app.js', 'js/orchid_tinymce_field.js')
    .setPublicPath('public')
    .disableNotifications()


// mix
//     .copyDirectory('./node_modules/tinymce/plugins', 'public/tinymce/plugins')
//     .copyDirectory('./node_modules/tinymce/themes', 'public/tinymce/themes')
//     .copyDirectory('./node_modules/tinymce/skins', 'public/tinymce/skins')
//     .options({
//         processCssUrls: false
//     })
//     .js('resources/js/tinymce_controller.js', 'tinymce.js')
//     .setPublicPath('public')
//     .disableNotifications()
//     .version();
