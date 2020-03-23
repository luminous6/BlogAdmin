'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: 'hail hydra',
    };
  }

}

module.exports = HomeController;
