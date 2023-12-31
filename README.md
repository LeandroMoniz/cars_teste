---
title: 'Api cars Teste'
disqus: hackmd
---
## Teste
## Table of Contents

[TOC]

## Start Project

If you are a total beginner to this, start here!

1. Download project from git or fork to your git
2. Open a terminal in the root of the project
3. Install node in version 18.15.0
4. Pype in terminal , NPM install to download
5. Para iniciar o projeto : npm start

## Proposta
- Consumir api externa de carros  
- Enviar Post para API com novos registro 
- Criar um tabela de logs de registro
- Rota com logs 
- Rota com novos registro mais registro da API
- Utilizar banco noslq 


Rotas
---

### Rota  listar Cars 

Rota GET http://localhost:5000/api/listCars 

### Retorna 
```gherkin=
    [
    {
        "_id": "64bdcec994a4c4001c3e1ac6",
        "title": "Prisma",
        "brand": "VW",
        "price": "900.000.00",
        "age": 2020,
        "__v": 0
    },
    ...
    {
        "_id": "64bdcf0c94a4c4001c3e1ac8",
        "title": "Prisma",
        "brand": "VW",
        "price": "900.000.00",
        "age": 2020,
        "__v": 0
    }
    ]
```

### Rota para cadastro.
#### POST http://localhost:5000/api/createCar

Time: 500ms


```gherkin=
    {
    "title": "fit",
    "brand": "honda",
    "price": "100000.10",
    "age":"2022"
}
```

## CASO FALHAS
### Caso não passe o Title 

```gherkin=
    {
    "title": "",
    "brand": "honda",
    "price": "100000.10",
    "age":"2022"
}
```
### Retorna
```gherkin=
{
    "message": "Obrigatório colocar o Modelo do veiculo"
}
```

### Caso não passe o brand

```gherkin=
    {
    "title": "fit",
    "brand": "",
    "price": "100000.10",
    "age":"2022"
}
```

### Retorna

```gherkin=
"message": "Obrigatório colocar a Marca do veiculo"
```

### Caso não passe Price
```gherkin =
{
    "title": "fit",
    "brand": "honda",
    "price": "",
    "age":"2022"
}
```

### Retorna
```gherkin =
{
    "message": "Obrigatório colocar a preço do veiculo"
}
```

### Caso passar letra, simbolos , virgula , cara  juntos com números 

```gherkin =
{
    "title": "fit",
    "brand": "honda",
    "price": "R$100000.10",
    "age":"2022"
}
```
### Retorna

```gherkin =
{
    "message": "O campo preço deve ser um número positivo maior que zero, pontos para separar centavos"
}
```

### Caso não passe o age 

```gherkin =
{
    "title": "fit",
    "brand": "honda",
    "price": "100000.10",
    "age":""
}
```


### Retorne
```gherkin = 
{
    "message": "O campo data deve conter apenas números"
}
```

## GET Logs 
#### Rota para busca os logs criado 
#### GET http://localhost:5000/api/logs

### Retorna
```gherkin =
{
    "logs": [
        {
            "_id": "64c2bb2cb062cc500cad5382",
            "car_id": "64c2bb2b94a4c4001c3e1ec9",
            "data_hora": "2023-07-27T18:45:00.039Z",
            "createdAt": "2023-07-27T18:45:00.040Z",
            "updatedAt": "2023-07-27T18:45:00.040Z",
            "__v": 0
        },
        {
            "_id": "64c2ba68b062cc500cad537f",
            "car_id": "64c2ba6894a4c4001c3e1ec8",
            "data_hora": "2023-07-27T18:41:44.959Z",
            "createdAt": "2023-07-27T18:41:44.960Z",
            "updatedAt": "2023-07-27T18:41:44.960Z",
            "__v": 0
        }
    ]
}
```
### GET Carros do banco 

Rota GET http://localhost:5000/api/CarsDb

### Retorna
```gherkin =
[
    {
        "_id": "64bdcec994a4c4001c3e1ac6",
        "title": "Prisma",
        "brand": "VW",
        "price": "900.000.00",
        "age": 2020,
        "__v": 0
    }, ...
```