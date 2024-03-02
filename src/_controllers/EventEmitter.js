class EventEmitter {
   constructor() {
      this.addListener = this.addListener.bind(this);
      this.unsubscribe = this.unsubscribe.bind(this);
      this.emit = this.emit.bind(this);
   }

   addListener(eventName, listener) {
      document.addEventListener(eventName, listener);
      return {remove: () => this.unsubscribe(eventName, listener)};
   }

   unsubscribe(eventName, listener) {
      document.removeEventListener(eventName, listener);
   }

   emit(eventName, data) {
      const event = new CustomEvent(eventName, {detail: data});
      document.dispatchEvent(event);
   }
}

export const AppEmitter = new EventEmitter();
export const appListen = (...args) => AppEmitter.addListener(...args);
export default EventEmitter;
