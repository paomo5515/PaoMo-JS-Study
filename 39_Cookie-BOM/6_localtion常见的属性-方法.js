console.log(window.location);


// 当前完整的 URL 地址
console.log(location.href);

// 协议 protocol
console.log(location.protocol)

// 几个方法
// location.assign("http://www.baidu.com")
// location.href = "http://www.baidu.com"

// 没有回退
location.replace("http://www.baidu.com")
// 重新加载
location.reload(true)