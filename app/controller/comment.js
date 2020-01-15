'use strict';
const { writeResponse, returnValue } = require('../utils/util');

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async queryCommentByBlogId() {
    const { ctx } = this;
    const { blogId } = ctx.query;
    const res = await ctx.service.comment.queryComment(blogId);
    ctx.body = writeResponse(200, '查询成功', res);

  }
  // 添加评论
  async insertComment() {
    const { ctx } = this;
    const params = ctx.request.body;
    const insertData = {
      blog_id: params.blog_id,
      email: params.email,
      nikename: params.nikename,
      content: params.content,
    };
    const res = await ctx.service.comment.insertComment(insertData);
    ctx.body = returnValue(res, {
      status: 200,
      successmsg: '添加成功',
      failedmsg: '添加失败',
    });
  }
  // 删除评论
  async delCommentById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const res = await ctx.service.comment.delComment(id);
    ctx.body = returnValue(res, {
      status: 200,
      successmsg: '删除成功',
      failedmsg: '删除失败',
    });
  }

}

module.exports = BlogController;
