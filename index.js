const express = require('express');

const app = express();

const list = require('./Models/list')

const PORT = 2000;

app.set ('view engine', 'ejs')
app.set ('views', './views')

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {

 

  res.render('index', {
    pageTitle: "List Page",
    pageHeader: "Welcome to the list:",
    
  })
});

app.get('/second-page', (req, res) => {
  
res.render('index', {
  pageTitle: 'Second Page',
  pageHeader: 'This is my second page', 
  
})
})


app.get('/second-page/about-me', (req, res) => {
res.render('index', {
  pageTitle: 'About me',
  pageHeader: 'This second page is about me'
})
})

app.get('/third-page', (req, res) => {
res.render('index', {
  pageTitle: 'Third Page',
  pageHeader: 'This is my third page'
})
})

app.get('/third-page/about-you', (req, res) => {
res.render('index', {
  pageTitle: 'About you',
  pageHeader: 'This third page is about you'
})
})


app.get('/employees', (req,res) => {

  const url = ['/second-page', '/second-page/about-me', '/third-page', '/third-page/about-you', '/employees']

  res.render('employees', {
    pageTitle: 'Employees List',
    pageHeader: 'Employees Info',
    list,
    data: url
  })
})



app.get('/employees/:id', (req, res) => {
  res.render('employees', {
    pageTitle: 'Employees',
    pageHeader: 'Employees Details',
    data: data[req.params.id - 1]
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})