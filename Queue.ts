export class Queue {
  private items: Record<string, any>;
  private head: number;
  private tail: number;

  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enQueue(item: any) {
    this.items[this.tail] = item;
    this.tail++;
  }

  deQueue() {
    if (this.isEmpty()) {
      return null;
    }

    const firstItem = this.peek();
    delete this.items[this.head];
    this.head++;
    return firstItem;
  }

  peek() {
    return this.items[this.head];
  }

  size() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.size() ? false : true;
  }

  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}
