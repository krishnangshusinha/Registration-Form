const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://krishnangshusinha15:JIyWm0TP886ZW0s4@registrationform.n31g42n.mongodb.net/?retryWrites=true&w=majority/employee")
.then(()=> console.log("Connection Successfull"))
.catch(()=> console.log("Error in connection"))
