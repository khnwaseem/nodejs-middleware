const express = require("express")

const app = express()

app.use(express.json())

const authenticate = (req,res,next) => {     
    try { 
        const {email,password} =   req.body
        if(email === "waseem@khanwaseem.com" && password === "waseem123")  {
            next()
        } else {
            throw new Error()
        }

    } catch (err) {
       res.status(401).send("wrong credentials")
    }

}


app.post("/authenticate", authenticate, (req,res) => {
    
    res.send("user authenticated")
})


app.listen(3000,() => {
    console.log("app running on server 3000")
})