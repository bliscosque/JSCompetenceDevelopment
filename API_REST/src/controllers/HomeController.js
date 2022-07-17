import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Goncalves',
      email: 'maria@yahoo.com.br',
      idade: 36,
      peso: 70,
      altura: 1.71,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
