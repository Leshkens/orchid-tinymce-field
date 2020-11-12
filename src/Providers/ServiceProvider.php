<?php

declare(strict_types=1);

namespace Leshkens\OrchidTinyMCEField\Providers;

use Orchid\Platform\Dashboard;
use Illuminate\Support\Facades\View;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    /**
     * @const string
     */
    const PACKAGE_NAME = 'orchid-tinymce-field';

    /**
     * @const string
     */
    const PACKAGE_PATH = __DIR__ . '/../../';

    /**
     * @var Dashboard
     */
    protected $dashboard;

    /**
     * @param Dashboard $dashboard
     */
    public function boot(Dashboard $dashboard)
    {
        $this->dashboard = $dashboard;

        $this->loadViewsFrom(self::PACKAGE_PATH . 'resources/views',
            self::PACKAGE_NAME);

        $this->registerResources();

        $this->publishes([
            self::PACKAGE_PATH . 'resources/views' => resource_path('views/vendor/'.self::PACKAGE_NAME)
        ]);
    }

    /**
     * @return $this
     */
    protected function registerResources(): self
    {
        $this->dashboard->addPublicDirectory(self::PACKAGE_NAME,
            self::PACKAGE_PATH . '/public');

        View::composer('platform::app', function () {
            $this->dashboard
                //->registerResource('scripts', 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.6/tinymce.min.js')
                ->registerResource('scripts', orchid_mix('/js/orchid_tinymce_field.js', self::PACKAGE_NAME));
        });

        return $this;
    }
}
