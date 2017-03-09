/**
 * Created by luxianying on 2017/3/6.
 */


// 根据名字取得cookie

export function getCookie(name) {
  const value = `;${document.cookie}`;
  const parts = value.split(`${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return '';
}

// 获取url中相关字段
// 根据QueryString参数名称获取值
export function getQueryStringByName(name) {
  var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return "";
  }
  return result[1];
}

// 获取本地存储的token
export function getToken(key) {
  return window.localStorage.getItem(key)
}


// 获取QueryString的数组
export function getQueryString() {
  var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+", "g"));
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].substring(1);
  }
  return result;
}

// 根据QueryString参数索引获取值
export function getQueryStringByIndex(index) {
  if (index == null) {
    return "";
  }
  var queryStringList = getQueryString();
  if (index >= queryStringList.length) {
    return "";
  }
  var result = queryStringList[index];
  var startIndex = result.indexOf("=") + 1;
  result = result.substring(startIndex);
  return result;
}

export function getMessageId(url) {
  if (!url) {
    url = window.location.pathname;
  }
  var tempArr = url.split('/');
  var messageString = tempArr[tempArr.length - 1].shift();
  var messageId = parseInt(messageString);
  return messageId
}

// split()可以将一个字符串分割成字符串数组，返回的数组不包括seperator本身。如果separator是
// 包含子表达式的正则表达式。那么返回的数据中宝库与这些子表达式匹配的字串,如果是空字符串''那么每个字符串都会被分割

export function getLastNumber(str) {
  const arr = str.split('');
  return arr[arr.length - 1];
}

// 取得相应位置上的数据
export function getPlaceNumber(str, i) {
  return str.split('')[i];
}


// slice()方法可以提取字符串的某个部分，并以新字符串返回被提取的部分

// stringObject.slice(start,end);
// start 表示要抽取的起始下标，-1表示最后一个数字，end如果位制定则提取的
// 字符串包括start到字符串结尾，如果该参数是负数，则是字符串的尾部开始算起的位置，string.slice()和Array.slice()相似
// 对数字加分隔符
export function addSplit(val) {
  const temp = Number(val).toFixed(2).toString();
  let num = temp.slice(0, -3);
  // 先存小数,不去算分隔符
  const numFix = temp.slice(-3);
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result + numFix;
  }
}

// 判断是安卓还是IOS
export function judgeAndroidOrIOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) {
    return 'android';
  } else if (/iphone|ipad|ipd/.test(ua)) {
    return 'ios';
  }
  // 默认是android
  return 'android';
}


// 判断是否为微信
export function isWX() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua) ? 'wechat' : 'notwechat';
}

// 判断是否为华尔街app里面

export function isWSApp() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /wscnapp/.test(ua) ? 'ws' : 'notws';
}
