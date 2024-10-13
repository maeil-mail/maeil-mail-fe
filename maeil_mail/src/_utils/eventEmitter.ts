type Listener<T = any> = (data: T) => void;

class EventEmitter {
  private events: { [key: string]: Listener[] } = {};

  subscribe<T = any>(event: string, listener: Listener<T>): () => void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener as Listener);
    return () => this.unsubscribe(event, listener);
  }

  unsubscribe<T = any>(event: string, listener: Listener<T>): void {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }

  publish<T = any>(event: string, data: T): void {
    if (!this.events[event]) return;
    this.events[event].forEach((listener) => listener(data));
  }
}

const eventEmitter = new EventEmitter();

export default eventEmitter;
