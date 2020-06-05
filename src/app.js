const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Where all the css js and img files go
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) =>{
    res.render('index', {})
})

app.get('/experience', (req, res) =>{
    res.render('experience', {})
})

app.get('/skills', (req, res) =>{
    res.render('skills', {})
})

app.get('/contact', (req, res) =>{
    res.render('contact', {})
})

app.get('/UniversityProjects', (req, res) =>{
    res.render('uniProjects', {})
})

app.get('/PersonalProjects', (req, res) =>{
    res.render('PersonalProj', {})
})

app.listen(port, () => {
    console.log('Server started up on port ' + port)
})