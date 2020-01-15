'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
  // 查询博客评论
  async queryComment(blogId) {
    const res = await this.app.mysql.select('comment', {
      where: {
        blog_id: blogId,
      },
    });
    return res;
  }
  // 添加博客评论
  async insertComment(data) {
    const insertData = {
      blog_id: data.blog_id,
      email: data.email,
      nikename: data.nikename,
      content: data.content,
      pushtime: Date.now(),
    };
    const res = await this.app.mysql.insert('comment', insertData);
    return res;
  }
  // 删除评论
  async delComment(id) {
    const res = await this.app.mysql.delete('comment', {
      id,
    });
    return res;
  }

}


module.exports = CommentService;
