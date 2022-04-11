require.config({
  paths: {
    foo: "./foo",
    bar: "./bar"
  }
})

require(["foo", "bar"], function (foo) {
  console.log("main:", foo)
})