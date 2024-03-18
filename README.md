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
        "password": "exmaplepassword",
        "dni": "848474848"
    }
-

POST /user/login
-
    {
        "dni": "848474848",
        "password": "exmaplepassword"
    }
-

POST /user/get
-

{
    "id": "65e91ac6326679dd05e42610"
}

-
```
