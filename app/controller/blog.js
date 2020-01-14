'use strict';
const Controller = require('egg').Controller;
const { writeResponse, returnValue } = require('../utils/util');
class BlogController extends Controller {
  // 查询所有博客
  async queryAllBlog() {
    const { ctx } = this;
    const res = await ctx.service.blog.queryAllBlog();
    ctx.body = writeResponse(200, '查询成功', res);
  }
  // 添加博客
  async addBlog() {
    const { ctx } = this;
    const params = ctx.request.body;
    const insertData = {
      title: params.title,
      content: params.content,
      tags: params.tags,
      pushtime: Date.now(),
    };
    const res = await ctx.service.blog.insertBlog(insertData);
    ctx.body = returnValue(res, {
      status: 200,
      successmsg: '添加成功',
      failedmsg: '添加失败',
    });
  }

}

module.exports = BlogController;
