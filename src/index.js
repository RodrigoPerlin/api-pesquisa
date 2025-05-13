
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

const alunos = [
  { id: 1, nome: 'Josão' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'Pedro' },
];

app.get('/alunos', (req, res) => {
  res.send(alunos);
});

app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const aluno = alunos.find(a => a.id === id);

  if (aluno) {
    res.send(aluno);
  } else {
    res.status(404).send({ erro: 'Aluno não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
