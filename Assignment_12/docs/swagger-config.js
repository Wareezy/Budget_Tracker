export const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Budget Tracker API",
        version: "1.0.0",
        description: "API documentation for User, Category, and Transaction endpoints",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./api/*.js"], // points to your route files
  };  