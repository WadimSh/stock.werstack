<p align="center">
  <img src="./helps/WERSTACK.png" alt="WERSTACK-PLATFORM">
</p>

---

# stock.werstack

stock.werstack - это серверное приложение, разработанное на основе платформы Node.js и фреймворка Express.js. Оно предназначено для хранения и управления файлами с изображениями.

### Описание REST API

API предоставляет роуты для загрузки, получения, поиска и удаления файлов с изображения, а так же создания и удаления папок на сервере. Для выполнения операций с папками требуется отправка авторизационного токена в заголовке запроса.

#### Роуты для работы с файлами изображений

| Роуты | Методы | Описание |
|:-----|:------|:---------|
| [/images/:folder](/helps/uploading-image.md)  | POST | Загружает на сервер файл с изображением в папку ```:folder``` |
| [/images/:folder/:file](/helps/returns-file.md) | GET | Возвращает файл ```:file``` из папки ```:folder``` |
| [/images/:folder](/helps/returns-array-links.md) | GET | Возвращает массив ссылок на файлы хранящиеся в папке ```:folder``` |
| [/images/:folder/:file](/helps/deletes-file.md) | DELETE | Удаляет файл ```:file``` из папки ```:folder``` |

#### Роут для поиска файлов изображений

| Роуты | Методы | Описание |
|:-----|:------|:---------|
| [/search/:folder?files=search_query](/helps/search-files.md) | GET | Возвращает массив ссылок на файлы из папки ```:folder``` содержащие в имени переданные значения ```search_query``` |

#### Роуты для работы с папками для хранения файлов изображений (обязательна передача токена в заголовке этих запросов)

| Роуты | Методы | Описание |
|:-----|:------|:---------|
| [/folders/create](/helps/create-folder.md) | GET | Создает папку на сервере |
| [/folders](/helps/returns-array-folders.md) | GET | Возвращает массив имен всех созданных папок на сервере |
| [/folders/:folder](/helps/deletes-folder.md) | DELETE | Удаляет с сервера папку ```:folder``` со всем ее содержимым |

### Запуск приложения и прочие комманды

`npm i` - установка

`npm run start` — запускает сервер

`npm run dev` — запускает сервер с hot-reload

---

<p align="center">
  <font size="2" color="#999999"><small>© 2023, made with ❤ for WERSTACK.COM</small></font>
</p>