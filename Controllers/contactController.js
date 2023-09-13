let contacts= [
    {
       "id": 114,
       "firstname": "Tehniyat",
       "lastname": "Fatima"
     },
     {
       "id": 116,
       "firstname": "Hassan",
       "lastname": "Khan"
     }
]


// get all Contacts
const getContacts = (req,res) =>{
    res.send(contacts)
    //res.send("it is get all contacts")

}

// get one user by id
 const getContact = (req,res) =>{
    // const { id } = req.params
    // const foundUser = users.find(user => user.id == id);
    // res.send(foundUser)
    res.send("it is get single contact")
}

// create user post contact
const createContact = (req,res) =>{
    console.log("request body is ",req.body)
    // const user = req.body
    // users.push(user)
    // res.send("new record added to database")
    res.send("it is post contact")
}

// create route for delete contact
const deleteContact = (req,res) =>{
//     const {id} = req.params
//     users = users.filter((user) => user.id != id)
//     res.send(`user with id ${id} is deleted from database`)
    res.send("it is for delete contact")
 }

// create route for update contact

const updateContact = (req,res) =>{
    // const {id} = req.params
    // const{firstname, lastname,ID} = req.body
    // const userToBeUpdate = users.find((users) => users.id ==id)

    // if(firstname) users.firstname = firstname
    // if(lastname) users.lstname = lastname
    // if(id) users.id = ID

    res.send(`it is for update contacts  has been updated`)
    
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact,
  };
