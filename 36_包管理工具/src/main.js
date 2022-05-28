/*
  
    script属性
      npm start 和 npm run start 的区别是什么？
        它们是等价的；
        对于常用的 start、test、stop、restart可以省略掉 run直接通过 npm start等方式运行；

    dependencies属性
      dependencies属性是指定无论开发者还是生产环境都需依赖的包；
      通常是我们项目实际开发用到的一些库模块vue、vuex、vue-router、react、react-dom、axios等等；
      与之对象的是 devDependencies;
    devDependencies属性
      一些包在生产环境是不需要的，比如webpack、babel等；
      这个时候我们会通过 npm i webpack --save-dev 或 -D，将它安装到 devDependencies属性中；
    peerDependencies属性
      还有一种项目依赖关系是等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的；
      比如 element-plus是基于 vue3的，ant design是依赖于 react、react-dom；

    我们会发现安装的依赖版本出现：^2.0.3或 ~ 2.0.3。这是什么意思呢？
    npm 的包通常需要遵从semver版本规范；
    semver版本规范是 X.Y.X：
      X 主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）
      Y 次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）
      Z 修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）

    这里解释一下 ^ 和 ~ 的区别：
      ^X.Y.Z：表示 X 是保持不变的，Y 和 Z 永远安装最新的版本；
      ~X.Y.Z：表示 X 和 Y 保持不变的，Z 永远安装最新的版本；

    package-locl.json 是记录的  真实的版本
*/

/*
    1.注册 npm 账号
    2.在命令行登录：npm login
    3.修改 package.json
    4.发布到 npm registry上：npm publish
    5.是否需要更新仓库
      1.修改版本号（最好符合 semver规范）  
      2.重新发布
    6.删除发布的包：npm unpublish
    7.让发布的包过期：npm deprecate
*/