class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eating = function () {
    console.log(eating)
  }
}

// bable 转换
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new
      TypeError("Cannot call a class as a function");
  }
}

var Person = /*#__PURE__*/_createClass(function Person() {
  _classCallCheck(this, Person);
})



"use strict";

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Person = /*#__PURE__*/ _createClass(function Person(name, age) {
  _classCallCheck(this, Person);

  _defineProperty(this, "eating", function () {
    console.log(eating);
  });
  this.name = name;
  this.age = age;
});

// 0.43.57
