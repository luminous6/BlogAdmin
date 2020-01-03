'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/queryStudent', controller.home.queryStudent);

  router.get('/queryBlogById', controller.comment.queryBlogById);

  // 每日一句模块
  router.get('/queryAllSentence', controller.dailySentence.queryAllSentence);
  router.get('/addSentence', controller.dailySentence.addSentence);
  router.get('/updateSentence', controller.dailySentence.updateSentence);
  router.get('/delSentenceById', controller.dailySentence.delSentenceById);

  // blog 模块
  router.get('/queryAllBlog', controller.blog.queryAllBlog);
  router.post('/addBlog', controller.blog.addBlog);
};
