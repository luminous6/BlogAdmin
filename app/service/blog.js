'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  // 查询所有博客
  async queryAllBlog() {
    const res = await this.app.mysql.select('blog');
    return res;
  }
  // 添加博客
  async insertBlog(data) {
    const insertData = {
      title: data.title,
      content: data.content,
      tags: data.tags,
      pushtime: data.pushtime,
    };
    const res = await this.app.mysql.insert('blog', insertData);
    return res;
  }

}

module.exports = BlogService;
