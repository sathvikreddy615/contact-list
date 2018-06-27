const ContactCollectionModule = require("./ContactCollection")
const ContactListModule = require("./ContactList")

// why are we putting deleteContact function outside of object?

// functionality for delete button. deletes a contact
const deleteContact = () => {
  console.log("delete button clicked", event.currentTarget.parentNode.id)
  const contactId = event.currentTarget.parentNode.id // assigns a variable delete buttons parent and the parent's id
  ContactCollectionModule.deleteContact(contactId) // calls the ajax delete function and removes contactID variable assigned above. This removes the unique contact id and all of its elements
  .then(() => { // handles a succesful call
    ContactListModule.buildContactList() // call the build contacts function --- why do we call this? 
  })
}

const contact = Object.create({}, {
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section") // creating HTML <section> element
      contactSection.id = `${contact.id}` // setting the id of the <section> to the paramter plus "id". This is in anticipation of the contact object being passed in as an argument where the function is called

      for(key in contact){ // looping through object paramter
        if(key === "id") {  // if the iterator equals the key name of "id"
          const deleteButton = document.createElement("button") // creates HTML <delete> button
          deleteButton.textContent = "Delete" // sets text
          deleteButton.addEventListener("click", deleteContact) // attaches an event listener and includes a predfined function that is prepared above
          contactSection.appendChild(deleteButton) // appending delete button to contactSection
        } else { // if the iterator equals any other key but "id"
          const paraElement = document.createElement("p") // creates an HTML <p> element
          paraElement.textContent = `${key}: ${contact[key]}` // sets text content key values
          contactSection.appendChild(paraElement) // appending key values to contactSection
        }
      }

      return contactSection
    }
  }
})

module.exports = contact
