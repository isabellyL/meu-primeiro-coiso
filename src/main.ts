import express from 'express'
import { db, firestore } from '../banco de dados/firebase';

const app = express()

app.get('/', (req, res) => {
    res.send("bem vindo ao meu primeiro coiso");
});

app.post("/usuario", async (req, res) => {
    const usuario = req.body.nome

    try {
        const docRef = await firestore.addDoc(firestore.collection(db, "usuario"),{
            nome: nome,  
    })
    res.send(docRef.id)
    }catch (e){
    console.log(e)
    res.status(500).send(e)
    }
})



app.listen(3000, function () {
    console.log('servidor rodando em http://localhost:3000')
});
