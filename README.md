# README

Настройка и запуск приложения на Debian/Ubuntu-подобной системе. На относительно  старых
дистрибутивах вместо *apt* использовать *apt-get*

## Ruby version
Для совместимости с используемыми Rails 5.1 требуется версия Ruby 2.3.1 или выше.
Вот как сконфигурирован пакет под ruby 2.4.0:
```
$ sudo apt install ruby-build
```
добавить к ~/.bashrc
```
eval "$(rbenv init -)"
````
Запустить новый терминал и выполнить установку и настройку:

```
$ rbenv install 2.4.0
$ rbenv shell 2.4.0
$ gem install bundler
```

## System dependencies
1. Mongo
     
       $ sudo apt install mongodb
      
2. Современные инструменты для JS

       $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
       # apt update
       # apt install nodejs 
       $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
       $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

## Конфигурация
```
$ cd event_log
$ bundle install
$ yarn
```

## Создание и инициализация базы данных
```
$ bin/rails db:setup
```

## Запуск в development
```
$ bin/webpack-dev-server 
```
и в другом окне

```
$ bin/rails s
```
