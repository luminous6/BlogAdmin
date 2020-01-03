'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async queryBlogById() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: {
        title: '测试标题',
        content: 'sdhflksdj f',
        views: 2324,
        id: 12,
        tag: 'js',
      },
    };
  }
}

module.exports = BlogController;
