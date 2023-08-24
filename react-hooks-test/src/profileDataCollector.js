export default function handleOnRender(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
    var totalJsMemory = performance.memory.usedJSHeapSize / 1024 / 1024;
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions, { "JsMemory" : totalJsMemory});
  }