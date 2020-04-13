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
  return writeResponse(202, data.failedmsg, 'null');
};

// 时间戳返回时间
const transformTime = time => {
  const date = new Date(Number(time));
  const formattedDate =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2) +
    ' ' +
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2);
  return formattedDate;
};

module.exports = { writeResponse, returnValue, transformTime };
