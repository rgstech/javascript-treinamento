const express = require('express')
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



let arClientes = [{ id: 0 , nome: 'Rodrigo', email: 'rod@email.com'     },
                  { id: 2 , nome: 'Rachel',  email: 'rachel@email.com'   },
                  { id: 3 , nome: 'Eduarda', email: 'eduarda@email.com' },
                  { id: 4 , nome: 'Fulano',  email: 'fulano@email.com'   },
                  { id: 5 , nome: 'Camila',  email: 'camila@email.com'   } ];



app.get('/clientes', (req, res) => { 

            res.json(arClientes);

         }) 

app.get('/clientes/:nome', (req, res)=> {   

    let arFiltrado = arClientes.filter( (c) => {

            return c.nome === req.params.nome;
        
    });

    res.json(arFiltrado);

}); 

app.delete('/clientes/:id', (req, res) => {   


   arClientes = arClientes.filter( (c) => {

        return c.id != req.params.id;
    
});

res.json(arClientes);
 
});

app.post('/clientes', (req, res)=> {   

    let record = req.body;

    record.id = Math.round(Math.random() * 100000);

    arClientes.push(record);

    res.json(arClientes);

});





app.listen(3000, () => {
    console.log('Backend funcionando 2...');
})