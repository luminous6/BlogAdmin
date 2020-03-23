'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 每日一句模块
  router.get('/queryAllSentence', controller.dailySentence.queryAllSentence);
  router.get('/addSentence', controller.dailySentence.addSentence);
  router.get('/updateSentence', controller.dailySentence.updateSentence);
  router.get('/delSentenceById', controller.dailySentence.delSentenceById);

  // blog 模块
  router.get('/queryAllBlog', controller.blog.queryAllBlog);
  router.get('/queryBlogDetailById', controller.blog.queryBlogDetailById);
  router.post('/addBlog', controller.blog.addBlog);
  router.get('/delBlogById', controller.blog.delBlogById);
  router.post('/updateBlog', controller.blog.updateBlog);

  // 评论模块
  router.get('/queryComment', controller.comment.queryCommentByBlogId);
  router.post('/addComment', controller.comment.insertComment);
  router.get('/delComment', controller.comment.delCommentById);
};
