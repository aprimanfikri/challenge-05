# Challenge-05

## Table of Contents

- [Challenge-05](#challenge-05)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Clone the repository:](#clone-the-repository)
    - [Install dependencies:](#install-dependencies)
    - [Set up environment:](#set-up-environment)
  - [Usage](#usage)
    - [Start the Development Server](#start-the-development-server)
      - [Create the database by running the following command:](#create-the-database-by-running-the-following-command)
      - [Run the migrations to set up the database schema:](#run-the-migrations-to-set-up-the-database-schema)
      - [Seed the database with initial data by running the following command:](#seed-the-database-with-initial-data-by-running-the-following-command)
      - [Start the server by running the following command:](#start-the-server-by-running-the-following-command)
  - [Access API Documentation](#access-api-documentation)

## Installation

Before you start, make sure you have Node.js and npm (Node Package Manager) installed on your system. You'll also need PostgreSQL installed and running.

### Clone the repository:

```shell
git clone https://github.com/aprimanfikri/challenge-05.git
cd challenge-05
```

### Install dependencies:

```shell
npm install
```

### Set up environment:

```shell
PORT=your-port
DB_USERNAME=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
JWT_SECRET=your-jwt-secret
```

## Usage

### Start the Development Server

To start the development server, follow these steps:

#### Create the database by running the following command:

```shell
npx sequelize db:create
```

This command will create the necessary database for your application.

#### Run the migrations to set up the database schema:

```shell
npx sequelize db:migrate
```

Migrations will create the tables and columns in the database based on your defined models.

#### Seed the database with initial data by running the following command:

```shell
npx sequelize db:seed:all
```

This will populate your database with any initial data you've defined in your seed files.

#### Start the server by running the following command:

```shell
npm run dev
```

This command will launch the development server, allowing you to test and develop your application.

The server will start, and you can access your application at http://localhost:your-port.

## Access API Documentation

The API documentation is available at http://localhost:your_port/api-docs when your development server is running. You can use this documentation to understand the available endpoints, request parameters, and response formats.

By following these steps, you'll have the development environment set up and ready for your application, and you can access the API documentation to explore the available endpoints.
