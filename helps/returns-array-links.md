<p align="center">
  <img src="./WERSTACK.png" alt="WERSTACK-PLATFORM">
</p>

---

<font size="2"><a href="../README.md">< Назад</a></font>

# Возврат массива ссылок на файлы хранящиеся в папке

Запрос возвращает массив данных о всех файлах хранящихся в указанной в url папке

### Request

 + HTTP Method: GET
 
 + URL: https://stock.werstack.com/images/c41562be-5668-4b0f-88a0-d7b1eafb146d

### Response

 + Status: 200

 + Headers: 
 ```javascript

  Content-Type: application/json

 ```

 + Body:
  ```javascript
  
  [
    {
      url: https://stock.werstack.com/images/c41562be-5668-4b0f-88a0-d7b1eafb146d/belyaev.jpg,
      size: 94502,
      name: belyaev.jpg,
    },
    {
      url: https://stock.werstack.com/images/c41562be-5668-4b0f-88a0-d7b1eafb146d/zateya.jpg,
      size: 10573,
      name: zateya.jpg,
    },
  ]
  
  ```

---

<p align="center">
  <font size="2" color="#999999"><small>© 2023, made with ❤ for WERSTACK.COM</small></font>
</p>