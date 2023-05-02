FROM php:8.2.0-cli

RUN apt-get update -y && apt-get install -y libmcrypt-dev

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get install -y libmcrypt-dev
RUN docker-php-ext-install pdo
RUN apt-get update && apt-get install -y libonig-dev
RUN docker-php-ext-install mbstring

RUN composer --version

WORKDIR /app
COPY . /app

RUN composer install

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000