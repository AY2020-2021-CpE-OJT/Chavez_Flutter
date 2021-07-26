const express = require('express');
require('dotenv').config()
const url = "mongodb+srv://chavez:chaveztest@ojt.ieruz.mongodb.net/Task003?retryWrites=true&w=majority";
const mongus = require('mongoose');
const schema = require('./schema/schema.js');

const app = express();
const port = 4200;

mongus.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) console.log(err)
    if (!err) console.log("Connected to MongoDB!");
});

app.use(express.json());

app.get('/contacts', async(req, res) => {
    const doc = await schema.find();
    res.json(doc);
});
app.post('/post', async (req, res) => {
    const document = new schema(
        { 
            firstName: req.body.firstName,
            lastName: req.body.lastName ,
            phoneNumber: req.body.phoneNumber,
            
        });
        document.save().then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({
                message: err
        })
    });
    console.log("Successfully inserted document!");
});

app.listen(port, () => console.log(`Port: http://localhost:${port}/`));
