# Usa a versão do Ruby que você já está usando
FROM ruby:3.2.2

# Instala dependências essenciais para o Rails + PostgreSQL/SQLite
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    curl

# Onde o código vai morar no container
WORKDIR /app

# Copia o Gemfile para instalar as dependências
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copia o restante do código
COPY . .

# Expõe a porta do Rails
EXPOSE 3000

# Comando para rodar o servidor (0.0.0.0 é necessário para o Docker)
CMD ["rails", "server", "-b", "0.0.0.0"]