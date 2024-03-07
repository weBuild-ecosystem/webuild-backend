# Nodejs App with express and jest, supertest
Para iniciar la aplicacion utilizar los siguientes comandos

```shell
npm i && npm run dev
```

Endpoints

```shell
Headers: 
'authorization' : 'authKey'
POST /user/create 
-
    {
        "email": "email@example.com",
        "notifications": [
            "Text #1",
            "Text #2"
        ]
    }
-

POST /user/get
-

{
    "id": "65e91ac6326679dd05e42610"
}

-
```
