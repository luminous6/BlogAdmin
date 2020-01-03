'use strict';

const Service = require('egg').Service;

class DailySentenceService extends Service {
  // 查询全部
  async queryAllSentence() {
    const res = await this.app.mysql.select('daily_sentence');
    return res;
  }
  // 删除句子 by id
  async delSentenceById(id) {
    const res = this.app.mysql.delete('daily_sentence', { id });
    return res;
  }

  // 添加每日一句
  async addSentence(content, author) {
    const insertData = {
      content,
      author,
      pushtime: Date.now().toString(),
    };
    const res = await this.app.mysql.insert('daily_sentence', insertData);
    return res;
  }
  // 修改每日一句
  async updateSentence(id, content, author) {
    const updateData = {
      id,
      content,
      author,
      updatetime: Date.now().toString(),
    };
    const res = await this.app.mysql.update('daily_sentence', updateData);
    return res;
  }
}

module.exports = DailySentenceService;
