'use strict';

const writeResponse = (code, msg, data) => {
  return {
    status: code,
    message: msg,
    data,
  };
};

// 判断数据库操作成功，返回值
const returnValue = (sqlState, data) => {
  const success = sqlState.affectedRows === 1;
  if (success) {
    return writeResponse(data.status, data.successmsg, 'null');
  }
  return writeResponse(data.status, data.failedmsg, 'null');


};

module.exports = { writeResponse, returnValue };
