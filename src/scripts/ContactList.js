const contactCollectionModule = require("./ContactCollection") // importing ajax/json function

// function that builds and appends contacts to DOM
const contactList = Object.create({}, {
  "buildContactList": {
    value: function(){
      contactCollectionModule.getContacts() // calling ajax function that stores or "gets" data
      .then((response) => { // handles a successfull call
        console.log("all contacts", response)
        const currentListRef = document.querySelector(".list-contacts-article") // getting the className of the <article> element being created below
        if(currentListRef){
          currentListRef.remove()
        }
        const contactsArticle = document.createElement("article") // creating <article> element
        contactsArticle.className = "list-contacts-article" // assigning a class

        // can we not import this outside of function? scope?

        const contactModule = require("./Contact") // importing contact object with nested function. this function creates elements for the contact data and takes one paramter for the contact object to be passed in as an argument
        response.forEach(contact => { // the function parameter for the .then above is "response". This paramater holds the contact data as an array; therefore, we are using a forEach to loop thru the array
          contactsArticle.appendChild(contactModule.createContactComponent(contact)) // appending the function inside contactModule to contactsArticle
        });
        document.querySelector("#display-container").appendChild(contactsArticle) // appending contactsArticle to dispaly-container located in index.HTML.
      })
    }
  }
})

module.exports = contactList
