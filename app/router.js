'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.login.index);

  // 每日一句模块
  router.get('/queryAllSentence', app.jwt, controller.dailySentence.queryAllSentence);
  router.get('/addSentence', app.jwt, controller.dailySentence.addSentence);
  router.get(
    '/updateSentence',
    app.jwt,
    controller.dailySentence.updateSentence
  );
  router.get(
    '/delSentenceById',
    app.jwt,
    controller.dailySentence.delSentenceById
  );
  router.get('/queryLatelySentence', controller.dailySentence.queryLatelySentence);

  // blog 模块
  router.get('/queryAllBlog', app.jwt, controller.blog.queryAllBlog);
  router.get(
    '/queryBlogDetailById',
    app.jwt,
    controller.blog.queryBlogDetailById
  );
  router.post('/addBlog', app.jwt, controller.blog.addBlog);
  router.get('/delBlogById', app.jwt, controller.blog.delBlogById);
  router.post('/updateBlog', app.jwt, controller.blog.updateBlog);

  // 评论模块
  router.get('/queryComment', app.jwt, controller.comment.queryCommentByBlogId);
  router.post('/addComment', app.jwt, controller.comment.insertComment);
  router.get('/delComment', app.jwt, controller.comment.delCommentById);
};
