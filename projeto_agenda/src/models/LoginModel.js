const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body=body;
    this.errors=[];
    this.user=null;

  }

  async login() {
    this.valida();
    if (this.errors.length > 0) return;

    this.user = await LoginModel.findOne({email: this.body.email});
    if (!this.user) {
      this.errors.push('Usuario nao existe');
      return;
    }

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha invalida');
      this.user=null;
      return;
    }

  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt=bcryptjs.genSaltSync();
    this.body.password=bcryptjs.hashSync(this.body.password, salt);

    this.user = await LoginModel.create(this.body);

  }
  async userExists() {
    this.user = await LoginModel.findOne({email: this.body.email});
    if (this.user) this.errors.push('Usuario já existe')
  }

  valida() {
    console.log(this.body);
    this.cleanUp();

    //email valido
    if (!validator.isEmail(this.body.email))
      this.errors.push('E-mail Invalido');

    //senha 3 a 50 chat
    if (this.body.password.length < 3 || this.body.password.length > 50) 
      this.errors.push('Senha precisa ser entre 3 e 50 char')
  }
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;
