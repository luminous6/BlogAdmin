/**

   【自定义允许跨域】：Access-Control-Allow-Origin

 */
'use strict';

module.exports = options => {
  const { whiteList } = options;
  if (!Array.isArray(whiteList)) {
    console.log('enter middleware');
    throw Error('---------跨域白名单必须设置为数组----------');
  }
  return async function setOrigin(ctx, next) {
    const { origin } = ctx.request.header;
    if (whiteList.indexOf('*') > -1) {
      ctx.response.set('Access-Control-Allow-Origin', origin);
    } else if (whiteList.indexOf(origin) > -1) {
      ctx.response.set('Access-Control-Allow-Origin', origin);
    }
    await next();
  };
};
