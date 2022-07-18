import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });// BAD REQUEST
    }
  }

  //Index
  async index(req, res) {
    try {
      const users=await User.findAll();
      return res.json(users)
    }catch (e) {
      return res.json(null);// PROGRAMA QUEBROU
    }
  }

  //Show
  async show(req, res) {
    try {
      const {id}=req.params;

      const user=await User.findByPk(id);
      return res.json(user);
    }catch (e) {
      return res.json(null);// NAO ENCONTROU
    }
  }
  //Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Missing ID'] });
      }
      const {id}=req.params;
      const user=await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['User does not exist'] });
      }

      const newData = await user.update(req.body);
      return res.json(newData);
    }catch (e) {
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }


  //Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Missing ID'] });
      }
      const {id}=req.params;
      const user=await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ errors: ['User does not exist'] });
      }

      await user.destroy();
      return res.json(user);
    }catch (e) {
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
