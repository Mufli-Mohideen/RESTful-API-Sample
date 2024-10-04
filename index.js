const express = require('express')
const PORT = 8080;
const app = express();
app.use(express.json());

const Tshirt = "Carnage";
const Size = "XL";

app.get("/",(req,res)=>{
    res.status(200).send('Hello Mufli');
});

app.get("/tshirt",(req,res)=>{
    res.status(200).send({
        Tshirt: Tshirt,
        Size: Size
    });
});

app.post("/tshirt/:id",(req,res)=>{
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.set(204).send("We need a logo");
    }

    res.set(200).send({
        tshirt: `Your ${logo} tshirt with ${id} will be delivered to you`
    });
});



app.listen(PORT, ()=>{
    console.log(`App is running on http://localhost:${PORT}`)
});