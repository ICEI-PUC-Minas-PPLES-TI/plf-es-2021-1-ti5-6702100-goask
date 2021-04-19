# GoAsk - API

---

## Estrutura das pastas

- Routers
- Crud
- Core
- Db

---

## Comandos

### Oracle cloud terminal

> ssh -i ssh-key-2021-03-21.key ubuntu@152.67.33.12

### dev

> uvicorn app.main:app --reload-dir app

### prod

> python my_app.py

## Docker

### Docker compose

Iniciar
> docker-compose up -d

Parar
> docker-compose down

### Docker

#### local

> docker build -t goask .

#### oracle

> docker build --network=host -t goask .

> docker run -d --name goask_container -p 3232:3232 goask

