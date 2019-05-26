# ParserGIBDD To JSON

##### Парсер статистики ДТП с гибдд.рф в JSON

### Требования

* [Docker] - Для развертывания приложения

### Запуск

```sh
$ git clone https://github.com/werewolff/ParserGIBDD.git ~/ParserGIBDD
$ cd ParserGIBDD
$ docker build -t parser .
$ docker run --name parser-1 -d parser
```
