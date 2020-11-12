import 'tinymce';

export default class extends window.Controller {

    static targets = [
        'wrapper',
        'input'
    ];

    /**
     *
     */
    connect() {

        const selector = this.element.querySelector('.tinymce').id;

        // for remove cache
        tinymce.remove(`#${selector}`);

        tinymce.baseURL = platform.prefix('/resources/orchid-tinymce-field/js/tinymce');

        let plugins = 'image media table link paste contextmenu textpattern autolink codesample';
        let toolbar1 = '';
        let inline = true;

        if (this.data.get('theme') === 'modern') {
            plugins = 'print autosave autoresize preview paste code searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern';
            toolbar1 = 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat | ltr rtl';
            inline = false;
        }

        const basicConfig = {
            branding: false,
            hidden_input: false,
            selector: `#${selector}`,
            theme: this.data.get('theme'),
            min_height: 300,
            height: 300,
            max_height: 600,
            plugins: plugins,
            toolbar1: toolbar1,
            insert_toolbar: 'quickimage quicktable media codesample fullscreen',
            selection_toolbar: 'bold italic | quicklink h2 h3 blockquote | alignleft aligncenter alignright alignjustify | outdent indent | removeformat ',
            inline: inline,
            convert_urls: false,
            image_caption: true,
            image_title: true,
            image_class_list: [
                {
                    title: 'None',
                    value: '',
                },
                {
                    title: 'Responsive',
                    value: 'img-fluid',
                },
            ],
            setup: (editor) => {
                editor.on('change', () => {
                    this.inputTarget.value = editor.getContent();
                });
            },
            images_upload_handler: (blobInfo, success, failure) => this.upload(blobInfo, success, failure)
        };

        let config = _.assign(basicConfig, this.customConfig());

        tinymce.init(config);
    }

    customConfig() {
        let config = this.data.has('config');

        if (!config) {
            return {};
        } else {
            return JSON.parse(this.data.get('config'));
        }
    }

    /**
     *
     * @param blobInfo
     * @param success
     * @param failure
     */
    upload(blobInfo, success, failure) {

        const dataAttr = this.data;

        const url = dataAttr.has('uploadEndpoint')
            ? dataAttr.get('uploadEndpoint')
            : platform.prefix('/systems/files');

        const formData = new FormData();

        const blob = blobInfo.blob();

        if (dataAttr.has('uploadMaxFileSize') && blob.size / 1024 > dataAttr.get('uploadMaxFileSize')) {

            let errorMessage = dataAttr.has('uploadMaxFileErrorMessage')
                ? dataAttr.get('uploadMaxFileErrorMessage')
                : 'The download file is too large.'

            failure(errorMessage);
            return;
        }

        formData.append('file', blob);

        dataAttr.has('uploadStorage') && formData.append('storage', dataAttr.get('uploadStorage'));
        dataAttr.has('uploadGroup') && formData.append('group', dataAttr.get('uploadGroup'));

        axios
            .post(url, formData)
            .then((response) => {
                success(response.data.url);
            })
            .catch((error) => {
                failure('File upload error');
                console.warn(error);
            });
    }

    disconnect() {
        tinymce.remove(`#${this.element.querySelector('.tinymce').id}`);
    }
}
