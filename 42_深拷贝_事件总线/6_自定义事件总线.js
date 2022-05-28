class PMEventBus {
  constructor() {
    this.eventBus = {}
  }
  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback,
      thisArg
    })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i];
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        console.log(index);
        handlers.splice(index, 1)
      }
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    });
  }
}

const eventBus = new PMEventBus()

// main.js
eventBus.on("abc", function () {
  console.log("监听abc1", this);
}, { name: "hello" })

const handleCallback = function () {
  console.log("监听abc2", this);
}
eventBus.on("abc", handleCallback, { name: "hello" })
// utils.js
eventBus.emit("abc", 123, 234)

// 移除监听
eventBus.off("abc", handleCallback)
eventBus.emit("abc", 123)



