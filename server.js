const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Cria uma instância do Express
const app = express();
app.use(cors());

// Configura o body-parser para que possamos ler dados em JSON
app.use(bodyParser.json());

// Conecta ao MongoDB (troque a URL de acordo com o seu banco de dados)
mongoose.connect('mongodb+srv://gaureliorodrigues:paraiba162@gabis.oh10e.mongodb.net/?retryWrites=true&w=majority&appName=gabis', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch(err => console.log('Erro na conexão com o MongoDB:', err));

// Definição do esquema do formulário
const FormSchema = new mongoose.Schema({
    empresa: { type: String, required: true },
    associada: { type: String, required: true },
    servicos: { type: String, required: true },
    desconto: { type: Number, required: true },
    forma_desconto: { type: String, required: true },
    termos: { type: String, required: true },
    observacoes: { type: String }
});

// Criação do modelo de dados baseado no esquema
const Form = mongoose.model('Form', FormSchema);

// Endpoint para salvar a inscrição
app.post('/api/inscricao', (req, res) => {
    // Cria um novo documento com os dados da requisição
    const novaInscricao = new Form(req.body);

    console.log("acessei o método app.post");

    // Salva os dados no MongoDB
    novaInscricao.save()
        .then(() => res.status(201).send('Inscrição salva com sucesso!'))
        .catch(
            
            err => res.status(500).send('Erro ao salvar inscrição: ' + err)
        );
});

// Endpoint para obter todas as inscrições (opcional, para visualizar no backend)
app.get('/api/inscricoes', (req, res) => {
    Form.find()
        .then(inscricoes => res.json(inscricoes))
        .catch(err => res.status(500).send('Erro ao obter inscrições: ' + err));
});

// Configuração do servidor para escutar na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
