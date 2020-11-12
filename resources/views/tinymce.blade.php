@component($typeForm, get_defined_vars())
    <div data-controller="fields--tinymce"
         data-fields--tinymce-theme="{{ $theme }}"
         @isset($config) data-fields--tinymce-config="{{ $config }}" @endisset
         @isset($uploadEndpoint) data-fields--tinymce-upload-endpoint="{{ $uploadEndpoint }}" @endisset
         @isset($uploadStorage) data-fields--tinymce-upload-storage="{{ $uploadStorage }}" @endisset
         @isset($uploadGroup) data-fields--tinymce-upload-group="{{ $uploadGroup }}" @endisset
         @isset($uploadMaxFileSize) data-fields--tinymce-upload-max-file-size="{{ $uploadMaxFileSize }}" @endisset
         @isset($uploadMaxFileErrorMessage) data-fields--tinymce-upload-max-file-error-message="{{ $uploadMaxFileErrorMessage }}" @endisset
    >
        <div class="tinymce border p-3"
             id="tinymce-wrapper-{{ $id }}"
             style="min-height: {{ $attributes['height'] }}"
        >
            {!! $value !!}
        </div>
        <input type="hidden"
               data-target="fields--tinymce.input"
            {{ $attributes }}
        >
    </div>
@endcomponent
