'use strict';
const Controller = require('egg').Controller;
const { writeResponse, transformTime } = require('../utils/util');
class DailySentenceController extends Controller {
  // 查询全部句子
  async queryAllSentence() {
    const { ctx } = this;
    const res = await ctx.service.dailySentence.queryAllSentence();
    res.forEach(item => {
      item.pushtime = transformTime(item.pushtime);
      item.updatetime = item.updatetime && transformTime(item.pushtime);
    });
    // 判断成功
    ctx.body = writeResponse(200, '查询成功', res);
  }
  // 删除句子 by id
  async delSentenceById() {
    const { ctx } = this;
    const { id } = ctx.query;
    const res = await ctx.service.dailySentence.delSentenceById(id);
    // 判断成功
    const insertSuccess = res.affectedRows === 1;
    if (insertSuccess) {
      ctx.body = writeResponse(200, '删除成功', null);
    } else {
      ctx.body = writeResponse(500, '删除失败', null);
    }
  }

  // 添加每日一句
  async addSentence() {
    const { ctx } = this;
    const { content, author } = ctx.query;
    const res = await ctx.service.dailySentence.addSentence(content, author);
    // 判断成功
    const insertSuccess = res.affectedRows === 1;
    if (insertSuccess) {
      ctx.body = writeResponse(200, '添加成功', null);
    } else {
      ctx.body = writeResponse(500, '添加失败', null);
    }
  }
  // 修改每日一句
  async updateSentence() {
    const { ctx } = this;
    const { content, author, id } = ctx.query;
    const res = await ctx.service.dailySentence.updateSentence(id, content, author);
    // 判断成功
    const insertSuccess = res.affectedRows === 1;
    if (insertSuccess) {
      ctx.body = writeResponse(200, '修改成功', null);
    } else {
      ctx.body = writeResponse(500, '修改失败', null);
    }

  }
}

module.exports = DailySentenceController;
