import express from 'express'
import { db, firestore } from '../banco de dados/firebase';

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("bem vindo ao meu primeiro coiso");
});

app.post("/usuario", async (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone

    try {
        const docRef = await firestore.addDoc(firestore.collection(db, "usuarios"),{
            nome: nome,  
            email: email,
            telefone: telefone,
    })
    res.send( "usuario adicionado com sucesso:" + docRef.id)
    }catch (e){
    console.log(e)
    res.status(500).send(e)
    }
})



app.listen(3000, function () {
    console.log('servidor rodando em http://localhost:3000')
});
