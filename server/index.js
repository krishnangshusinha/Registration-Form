/* 

    npm init        --> initializes package-lock.json
    npm i express   --> installs expressjs
    npm i mongoose  --> installs mongoose to connect database to server
    npm i cors      --> to handle any server requests that might be neglected by the hosted site
    npm i nodemon   --> gets nodemon( must add the "start" attribute in package.json)

*/
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const EmployeeModel = require("./models/Employee");

const cors = require('cors');       // cors is used since some time hosting site may reject so requests to the server to prevent that this is used

require("./connect");       // imports the "connect.js" file and then connects database(mongodb) with nodejs server


app.use(express.json());        // transports the data from frontend to backend in JSON format
const corsOptions = {
      origin: '*',
      credentials: true,
      optionSuccessStatus: 200
}
app.use(cors(corsOptions))


app.post("/login", (req,res)=> {
    const {email,password} = req.body;
    
    EmployeeModel.findOne({email: email})
    .then(user => {
        if( user ){
            if( user.password === password ){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No user existed")
        }
    })
})
app.post("/register", (req,res)=> {     // req -->comes from front end and   res--> that server send to frontend
   
    EmployeeModel.create(req.body)          // creates a row of data obtained from frontend following this schema
    .then(employees => res.json(employees))     // sending that data in format of json back to frontend
    .catch(err => res.json(err))

})

app.listen(port , ()=> {
    console.log(`Server listening at Port ${port}`);
})
