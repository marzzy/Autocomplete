/* eslint-disable max-classes-per-file */
/* eslint-disable no-constructor-return */
if (!window.Worker) {
  class Worker {
    constructor(stringUrl) {
      this.url = stringUrl;
      this.onmessage = (msg) => {};
    }

    postMessage(msg) {
      this.onmessage(msg);
    }
  }
  window.Worker = Worker;
}

export default class WorkerBuilder extends Worker {
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    if (typeof URL.createObjectURL === 'function') {
      return new Worker(URL.createObjectURL(blob));
    }
    return new Worker();
  }
}
