const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Express Specific
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());

//pug specific
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));//set the views directory

app.get('/', (req, res) => {
    
    const params = {};
    res.status(200).render('index.pug',params);
  })
app.get('/home',(req,res)=>{
  const params = {};
  res.status(200).render('index.pug',params);

})
app.get('/thankyou',(req,res)=>{
  const params = {};
  res.status(200).render('thankyou.pug',params);

})

  app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug',params);
  })


//for starting server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

