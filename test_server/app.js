import express from 'express';
import path from 'path';
import Twig from "twig";

const __dirname = path.resolve();
const PORT = process.env.PORT ? process.env.PORT : 3000;
const app = express();
const pathTemplates = `${path.resolve(__dirname)}/templates`;

app.use(express.static('static'));

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const dogs = [{
  "message": 'http://localhost:3000/img/dog/1.jpg',
  "status": "success"
},
{
  "message": 'http://localhost:3000/img/dog/2.jpg',
  "status": "success"
},
{
  "message": 'http://localhost:3000/img/dog/3.jpg',
  "status": "success"
},
{
  "message": 'http://localhost:3000/img/dog/4.jpg',
  "status": "success"
},
{
  "message": 'http://localhost:3000/img/dog/5.jpg',
  "status": "success"
}];

app.set("twig", {
  allow_async: true, // Allow asynchronous compiling
  strict_variables: false
});

app.get('/', (req, res) => {
  res.render(`${pathTemplates}/index.twig`, {
    title: 'Главная страница',
    header: "Главная страница"
  });
});

app.get('/api/', (req, res) => {
  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.json({ ...dogs[getRandomArbitrary(1, 5)] });
});

app.get('/dog', (req, res) => {
  res.render(`${pathTemplates}/dog-list.twig`, {
    title: 'Вывод собачек',
    header : "Тут я бду выводить собачек",
    dogs
  });
});

app.get('/dog/:id', (req, res) => {
  res.render(`${pathTemplates}/dog-item.twig`, {
    title: `Конкретная собачка`,
    header : `Конкретная собачка`,
    dog: req.params.id
  });
});

app.get('*', (req, res) => {
  if(res.status(404).statusCode = 404) {
    res.render(`${pathTemplates}/404.twig`, {
      title: "Страница отсутствует",
      header : "404",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listener in port -  ${PORT}`);
});