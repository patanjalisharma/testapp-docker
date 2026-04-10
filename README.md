# 🐳 Dockerized Node.js + MongoDB App

A simple full-stack app to add users (name, email, password), fully containerized using **Node.js**, **Express**, and **MongoDB**. No local setup required beyond Docker.

---

## 🚀 Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine

### Steps

1. **Create a `docker-compose.yml` file** in any folder with the following content:

```yaml
version: "3.8"

services:
  app:
    image: patanjalisharma/test-app07
    ports:
      - "5050:5050"
    depends_on:
      - mongo

  mongo:
    image: mongo
    container_name: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
```

2. **Start the app:**

```bash
docker-compose up
```

3. **Open your browser and visit:**

```
http://localhost:5050
```

---

## 🐳 Docker Hub

The image is publicly available on Docker Hub:

👉 [patanjalisharma/test-app07](https://hub.docker.com/r/patanjalisharma/test-app07)

---

## ✨ Features

- Add users via a simple form (name, email, password)
- Fully containerized — no manual dependency installation
- Works out of the box with a single `docker-compose up`

---

## ⚙️ Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Runtime   | Node.js        |
| Framework | Express        |
| Database  | MongoDB        |
| Container | Docker         |
| Orchestration | Docker Compose |

---

## 🛑 Stopping the App

```bash
docker-compose down
```


```bash
docker-compose down -v
```