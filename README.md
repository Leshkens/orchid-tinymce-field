## Installation

Install via composer:

```bash
composer require leshkens/orchid-tinymce-field
```

## Usage

It easy. Add to you row layout class:

```php
use Leshkens\OrchidTinyMCEField\TinyMCE;

TinyMCE::make('tinymce');
```

Available methods:

```php
TinyMCE::make('tinymce')
    ->config([
        // TinyMCE config
        'language_url' => asset('/js/tinymce/langs/ru.js'),
        ...        
    ])
    ->uploadEndpoint('') // You image upload custom endpoint
    ->uploadStorage('') // Upload storage
    ->uploadGroup('') // Upload group
    ->uploadMaxFileSize(1000) // in kb
    ->uploadMaxFileErrorMessage('Слишком большой размер файла'); // Custom error message
```


