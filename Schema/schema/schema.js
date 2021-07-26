const mongus = require('mongoose');

const schem = mongus.Schema({
    firstName: 
    {
        type: String, required:true
    },
    lastName:  
    {
        type: String, required:true
    },
    phoneNumber: 
    {
        type: String, required:true
    },
})
module.exports = mongus.model('contacts', schem);
