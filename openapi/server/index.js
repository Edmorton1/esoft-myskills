'use strict';

// КОММАНДА ЧТОБЫ СГЕНЕРИРОВАТЬ СПЕКУ - npx openapi-generator-cli generate -i spec/schema.yml -g javascript -o ./client --skip-validate-spec
// СГЕНЕРИРОВАТЬ ТИПЫ НА ОСНОВЕ openapi npx openapi-typescript ./spec/schema.yml --output types/openapi.d.ts

const express = require('express');
const { serve, setup } = require('swagger-ui-express');
const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const OpenApiValidator = require("express-openapi-validator");
const {HttpError} = require("express-openapi-validator/dist/framework/types");

const pathToSpec = path.join(__dirname, '../spec/schema.yml')

const app = express();

app.use(express.json());

const file = fs.readFileSync(pathToSpec, 'utf-8');
const swaggerDoc = YAML.parse(file);

app.use('/spec', serve, setup(swaggerDoc));

app.use(OpenApiValidator.middleware({
  apiSpec: pathToSpec,
  validateRequests: true,
  validateResponses: true,
}))

app.get('/users', (req, res) => {
  console.log('get users');
  const {id} = req.query
  console.log(id)
  res.json({ id, name: 'vasya', email: 'q@w.er', password: '123456' });
});

app.post('/users', (req, res) => {
  console.log('post user', req.body);
  res.json({id: 1, ...req.body})
})

app.use((err, req, res, next) => {
  console.error(err);

  if (err instanceof HttpError) {
    res.json({
      code: err.status,
      message: [...err.errors],
    })
    return;
  }

  res.json({code: 500, message: err.message});
})

app.listen(3000, () => {
  console.log('Express server listening on port http://localhost:3000/spec');
});
