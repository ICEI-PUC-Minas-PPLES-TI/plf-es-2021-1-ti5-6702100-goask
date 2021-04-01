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

### docker

#### local

> sudo docker build -t goask .

#### oracle

> sudo docker build --no-cache --network=host -t goask .

> sudo docker run -d --name goask_container -p 8080:3232 goask







