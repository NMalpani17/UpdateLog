# UpdateLog

## Project Description

###

The Update Log application is built using TypeScript, Node.js, Express, Prisma, and PostgreSQL. It features comprehensive CRUD functionality of products and their respective updates. User authentication is implemented through a registration and sign-in process, with JWT-based authentication required for accessing all product and update routes. The application is deployed on Render.com.

### Tools used

1. Code Editor: Visual Studio Code (VS Code)
2. Version Control: Git
3. Technology: TypeScript, Node.js, Express, Prisma ,Jest

### Installation and Running Instructions

1. Clone this repository

```bash
git@github.com:NMalpani17/UpdateLog.git
```

2. Open the repository with Visual Studio or any other IDE.

3. Run the following command folder directory to install and add node modules

```bash
npm install
```

4. Run the following command to transpile TypeScript into JavaScript

```bash
npm run build
```

5. Run the following command to start the server and listen for incoming requests.

```bash
npm start
```

## Deployment

This app is deployed on Render.com. [Deployment URL](https://updatelog-fua8.onrender.com/)

### Note

Ensure to create a .env file in the root directory for environment-specific configurations like DBURL and JWTSECRET. This file is not added to Git for security reasons.
