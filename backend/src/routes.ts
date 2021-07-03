import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/front-end/index.html');
})

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/front-end/css');
})

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/front-end/js');
})

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/front-end/img');
})

export { router };
