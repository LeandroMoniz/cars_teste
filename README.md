---
title: 'Api cars'
disqus: hackmd
---

## Table of Contents

[TOC]

## Start Project

If you are a total beginner to this, start here!

1. Download project from git or fork to your git
2. Open a terminal in the root of the project
3. Install node in version 18.15.0
4. Pype in terminal , NPM install to download
5. Para iniciar o projeto : npm start

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
#### POST http://localhost:5000/api/create


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






User flows
---
```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
Note left of Alice: Alice responds
Alice->Bob: Where have you been?
```

> Read more about sequence-diagrams here: http://bramp.github.io/js-sequence-diagrams/

Project Timeline
---
```mermaid
gantt
    title A Gantt Diagram

    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    anther task      : 24d
```

> Read more about mermaid here: http://mermaid-js.github.io/mermaid/

## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Templates` `Documentation`