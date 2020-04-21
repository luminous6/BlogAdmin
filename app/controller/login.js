'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    console.log(data.username, data.password);

    if (data.username === 'admin' && data.password === 'admin') {
      const token = app.jwt.sign(
        {
          username: data.username, // 需要存储的 token 数据
          password: data.password,
        },
        app.config.jwt.secret
      );
      // 返回 token 到前端
      // ctx.body = token;
      ctx.body = {
        status: 200,
        data: '登录成功',
        token,
      };
    } else {
      ctx.body = {
        status: 203,
        data: '用户名/密码错误',
      };
    }
  }
}

module.exports = LoginController;
