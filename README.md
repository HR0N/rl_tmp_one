# React, Laravel. Template one 👾 

<img src="./logo/React%20logo.png" alt="React logo" style="width: 420px"/>

## React 🤖 
- npx create-react-app front
- npm i --save-dev sass
- npm i react-router-dom axios redux react-redux redux-thunk react-localization h-bootstrap --save
- npm run start || yarn start
- npm run build
- axios.defaults.withCredentials = true;
##### Optional
- npm install jquery --save
- npm i h-bootstrap
- npm i bootstrap
##### React Font Awesome
- npm i --save @fortawesome/fontawesome-svg-core
- npm install --save @fortawesome/free-solid-svg-icons
- npm install --save @fortawesome/react-fontawesome
###### Examples
- import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
- import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
- <FontAwesomeIcon className={`faCaretLeft`} icon={faCaretLeft}/>
- // shadow for SVG => filter: drop-shadow(1px 1px 2px black);





<img src="./logo/Laravel%20logo2.png" alt="Laravel logo" style="width: 420px"/>

## Laravel 🎃
- composer create-project laravel/laravel back
- composer global require laravel/installer
- laravel new example-app
- npm i
- php artisan migrate
- composer require laravel/ui
- php artisan ui:auth
- php artisan serve
- php artisan migrate
- 
- php artisan config:cache
- php artisan cache:clear
- php artisan config:clear
- php artisan make:model EXAMPLE -m
- php artisan make:controller EaxampleController --api
- php artisan make:migration create_example_table
- php artisan migrate
- php artisan route:list
##### Settings
- back > config > cors.php > 'supports_credentials' => true,
- back > config > cors.php > 'allowed_origins' => ['https://example.com'],

#### Problems
##### Can't install laravel using composer
- composer create-project laravel/laravel example --ignore-platform-req=php
##### Can't migrate [SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;]
open config/database.php, then
 replace it: 'engine' => null', with it: 'engine' => 'InnoDB ROW_FORMAT=DYNAMIC',
 then php artisan config:cache	


<img src="./logo/Sanctum%20logo.png" alt="Sanctum logo" style="width: 420px"/>

## Sanctum 👽
- open Kernel, realise it: \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
- composer require laravel/ui
- php artisan ui:auth
- config/cors: 'supports_credentials' => true,
- also in axios: axios.defaults.withCredentials = true;

