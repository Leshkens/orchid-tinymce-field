import TinyMCEField from './controllers/tinymce_controller';

if (typeof window.application !== 'undefined') {
    window.application.register('fields--tinymce', TinyMCEField);
}
