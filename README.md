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

Avaialble methods:

```php
TinyMCE::make('tinymce')
    ->config([
        //TinyMCE config
    ])
    ->uploadEndpoint('') // You image upload custom endpoint
    ->uploadStorage('') // Upload storage
    ->uploadGroup('') // Upload group
    ->uploadMaxFileSize(1000) // in kb
    ->uploadMaxFileErrorMessage('Слишком большой размер файла'); // Custom error message
```


