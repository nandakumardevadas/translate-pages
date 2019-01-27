const express = require('express');
const app = express();
const path = require('path');
const port = 4701;

global.translatorFile = require('./assets/json/translation.json');
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/assets'));

app.get('/',function(req,res) {
  res.render(path.join(__dirname+'/index.ejs'), {
      translation: JSON.stringify(translatorFile)
  });
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
