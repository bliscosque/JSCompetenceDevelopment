import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.json('OK');
  }
}

export default new HomeController();
