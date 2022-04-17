// 打开数据库（和数据库建立连接），如果不存在就会自动创建
const dbRequest = indexedDB.open("paomo")
dbRequest.onerror = function (err) {
  console.log("打开数据库失败~")
}

let db = null
// 成功
dbRequest.onsuccess = function (event) {
  db = event.target.result
}

// 第一次打开或版本升级
dbRequest.onupgradeneeded = function (evetn) {
  const db = evetn.target.result
  // 创建一些存储对象
  db.createObjectStore("users", { keyPath: "id" })
}

class User {
  constructor(id, name, age) {
    this.id = id
    this.name = name
    this.age = age
  }
}

const users = [
  new User(100, "hello", 12),
  new User(101, "tom", 13),
  new User(102, "jerry", 14)
]

// 获取btn，监听点击
const btns = document.querySelectorAll("button")
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    const transaction = db.transaction("users", "readwrite")
    const store = transaction.objectStore("users")

    switch (i) {
      case 0:
        console.log("点击了新增");
        for (const user of users) {
          const request = store.add(user)
          request.onsuccess = function () {
            console.log(`${user.name}插入成功`);
          }
        }
        transaction.oncomplete = function () {
          console.log("添加操作全部完成");
        }
        break;
      case 1:
        console.log("点击了查询");

        // 1.查询方式一（直到主键，根据主键查询），查询是异步的
        /* const request = store.get(101)
        request.onsuccess = function (event) {
          console.log(event.target.result);
        } */

        // 2.查询方式二：游标
        const request = store.openCursor()
        request.onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 102) {
              console.log(cursor.key, cursor.value);
            } else {
              cursor.continue()
            }
          } else {
            console.log("查询完成");
          }
        }
        break;
      case 2:
        console.log("点击了删除");
        const deleteRequest = store.openCursor()
        deleteRequest.onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 102) {
              cursor.delete()
            } else {
              cursor.continue()
            }
          } else {
            console.log("删除完成");
          }
        }
        break;
      case 3:
        console.log("点击了修改");
        const updateRequest = store.openCursor()
        updateRequest.onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            if (cursor.key === 102) {
              const value = cursor.value;
              value.name = "curry"
              cursor.update(value);
            } else {
              cursor.continue()
            }
          } else {
            console.log("修改完成");
          }
        }
        break;
      default:
        break;
    }
  }
}