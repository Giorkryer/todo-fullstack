# Todo-List Full Stack (Rails & React)

Um projeto prático de lista de tarefas para consolidar conhecimentos em desenvolvimento Full Stack, utilizando **Ruby on Rails** como API e **React** para a interface, tudo orquestrado com **Docker**.

# Tecnologias Utilizadas

- **Backend:** Ruby on Rails 7+ (API Mode)
- **Frontend:** React.js (Axios para consumo de API)
- **Banco de Dados:** SQLite (persistência local)
- **Infraestrutura:** Docker & Docker Compose
- **Arquitetura:** Namespace API no Rails

## Como Rodar o Projeto

Este projeto está totalmente "containerizado". Você só precisa ter o Docker instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Giorkryer/todo-fullstack.git](https://github.com/Giorkryer/todo-fullstack.git)
   cd todo-fullstack

2. **Suba os Containers**
   ```bash
   docker-compose up --build

3. **Prepare o banco para a primeira execução**
   ```bash
   docker-compose exec backend rails db:prepare

5. **Acesso no navegador**
   ```bash
   Frontend: http://localhost:4000
   Backend API: http://localhost:3000/api/todos
