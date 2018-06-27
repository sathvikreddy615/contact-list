const $ = require("jquery") // importing jQuery into file

const contactCollection = Object.create({}, {
  "postContact": { // creates and adds new contact data into json database
    value: function(name, phone, address) {
      return $.ajax({
        url: "http://localhost:3000/contacts",
        method: "POST", // specifying the method to be post
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  },

  // why dont you include the method? 

  "getContacts": { // queries contact data from json database
    value: function() {
      return $.ajax("http://localhost:3000/contacts")
    }
  },
  "deleteContact": { // deletes existing data in json database
    value: function(id){ // id parameter specifies the specifc key in database to be deleted.
      return $.ajax({ 
        url: `http://localhost:3000/contacts/${id}`, // deleting the id key in database 
        method: "DELETE" // specifying the method to be delete
      })
    }
  }
})

module.exports = contactCollection
