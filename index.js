const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.use(cors());


app.get('/', (req, res) => {
   res.send('Course Server is running')
})

app.get('/categories', (req, res) => {
   res.send(categories)
})

app.get('/category/:id', (req, res) => {
   const id = req.params.id;
   if (id === '07') {
      res.send(course)
   }
   else {
      const categoryCourse = course.filter(n => n.category_id === id);
      res.send(categoryCourse)
   }
})
app.get('/course', (req, res) => {
   res.send(course);
})

app.get('/course/:id', (req, res) => {
   const id = req.params.id;
   const selectedCourse = course.find(c => c._id === id)
   res.send(selectedCourse)
})


app.listen(port, () => {
   console.log(`Course running on port ,${port}`);
})

app.get('/course', (req, res) => {
   res.send(course)
})