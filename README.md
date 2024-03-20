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
        "dni": "848474848",
        "email": "email@email.com",
        "fullname": "Full Name",
        "phone": "+5423003",
        "entities": ["entitie_id"],
    }
-

POST /user/login
-
    {
        "dni": "848474848",
        "password": "exmaplepassword"
    }
-

POST /user/get // Cookies se implementan automaticamente despues de haber hecho login y no necesitas enviar nada
-


-

POST /entities/create
-

{
    "nies": ["nies"],
    "type": 0, "0 Ayuntamiento, 1 Empresas",
    "fullname": "Ayuntamiento asdads"

}

-

POST /entities/get
-

{
    "id": "identitie"

}

-

POST /entities/getmyentities
{
    "entities": ["identitie"]

}
-

POST /votations/create
{
    image: string;
    title: string;
    description: string;
    options: string[];
    timeStart: string;
    timeEnd: string;
    votes: VotesModel[],
    from_id: string;

}
-

POST /votations/get
-

{
    "from_id": "identitie"

}
```
