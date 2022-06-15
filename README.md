# Products API - Frontend
![Badge em Desenvolvimento](https://img.shields.io/badge/Status-Development-yellow)

## Description
This project is a API to storage products information. Was made in Python/Django in backend and React in frontend.

This project is compounded by 2 repositories:

* **Backend and Database** - https://github.com/brunoaffonso/products_api_backend

* **Frontend** - this repository.

## Installation

The best way to run this project, is using docker and docker compose.

1. Create project folder
2. Clone Frontend repository
3. Clone Backend repository
4. Enter in backend folder
5. Copy .env file
6. Generate SECRET_KEY

```bash
mkdir products
git clone https://github.com/brunoaffonso/products_api_frontend.git
git clone https://github.com/brunoaffonso/products_api_backend.git
cd products_api_backend
cp contrib/env-sample .env
python3 contrib/secret_gen.py
```
7. Write the environments variables

.env
```bash
SECRET_KEY=(key generated)
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=db
DB_PORT=5432
```

8. Run docker-compose
```bash
docker-compose up
```

## Project pendences
- `Authentication`: Implement JWT authentication
- `Tests`

## Technologies
<div>
<a href="https://www.python.org/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" width="40" height="40"/></a>
<a href="https://djangoproject.com/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="Django" width="40" height="40"/></a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" width="40" height="40"/></a>
<a href="https://www.docker.com/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" width="40" height="40"/></a>
<a href="https://www.postgresql.org/"> <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSql" width="40" height="40"/></a>
</div>

## License
![Badge em Desenvolvimento](https://img.shields.io/badge/Licence-MIT-green)