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

app.get("/listarUsuario",async( req, res) =>{
    const usuarios = await firestore.getDocs(firestore.collection(db, "usuarios"))

    const usuariosLista = usuarios.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    res.send(usuariosLista)
    try {
        
    } catch (e) {
        console.log("Erro ao listar usuários: " + e)
        
    }
})
app.put('/atualizarUsuario/:id', async(req, res)=>{
    const id = req.params.id
    const nome = req.body.nome

    try {
        await firestore.updateDoc(firestore.doc(db,'usuarios', id ),{
            nome: nome,

        })
        res.send('Usuário atualizado com sucesso!')
    } catch (e) {
        console.log ('Erro ao atualizar usuário: ' + e)

        res.status(500).send('Erro ao atualizar usuário:' + e)
        
    }
})
app.delete('/deletarUsuario/:id', async (req, res)=> {
    const id = req.params.id

    try {
      await firestore.deleteDoc(firestore.doc(db, 'usuarios' , id))
    
      res.send('Usuário deletado com sucesso')
    } catch (e) {
        console.log ('Erro ao deletar usuario:' +e)

        res.status(500).send('Erro ao deletar usuario:' +e)
    }
})

app.listen(3000, function () {
    console.log('servidor rodando em http://localhost:3000')
});
