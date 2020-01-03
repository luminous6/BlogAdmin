'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  // 查询所有博客
  async queryAllBlog() {
    const res = await this.app.mysql.select('blog');
    return res;
  }


}

module.exports = BlogService;
