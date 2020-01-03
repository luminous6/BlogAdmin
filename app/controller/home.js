'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: [ 1, 2 ],
    };
  }
  async queryStudent() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      message: '查询成功',
      data: [ 1, 2 ],
    };
  }
}

module.exports = HomeController;
