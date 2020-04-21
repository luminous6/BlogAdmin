/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 连接mysql数据库
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '1234',
      database: 'db_blogmanagement',
      // password: 'xm.123',
      // database: 'blog',
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576551934669_8298';

  // add your middleware config here
  config.middleware = [
  ];
  config.cors = {
    origin: '*',
    // credentials: true, // 允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // config.setAccessControlAllow = {
  //   whiteList: [ '*' ],
  // };
  // add your user config here
  config.jwt = {
    secret: '123456',
  };
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
