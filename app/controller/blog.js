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
    console.log(params);
    ctx.body = writeResponse(200, '查询成功', null);
    return;
    // const res = await ctx.service.blog.insertBlog();
    // ctx.body = returnValue(res, {
    //   successmsg: '添加成功',
    //   failedmsg: '添加失败',
    // });


    // const success = res.affectedRows === 1;
    // if (success) {
    //   writeResponse(200, '添加成功', null);
    // } else {
    //   writeResponse(500, '添加失败', null);
    // }

  }

}

module.exports = BlogController;
