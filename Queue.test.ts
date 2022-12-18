import { Queue } from "./Queue";

describe("Queue Tests", () => {
  test("Can add item to the queue", () => {
    const queue = new Queue();

    queue.enQueue("Jan");

    expect(queue.size()).toEqual(1);
  });

  test("Can remove first item of the queue", () => {
    const queue = new Queue();

    queue.enQueue("Jan");
    queue.enQueue("Feb");

    expect(queue.deQueue()).toEqual("Jan");
    expect(queue.size()).toEqual(1);
  });

  test("Can get queue peek", () => {
    const queue = new Queue();

    queue.enQueue("Jan");
    queue.enQueue("Feb");

    expect(queue.peek()).toEqual("Jan");
  });

  test("Can get queue size", () => {
    const queue = new Queue();

    queue.enQueue("Jan");
    queue.enQueue("Feb");

    expect(queue.size()).toEqual(2);
  });

  test("Can check queue empty", () => {
    const queue = new Queue();

    queue.enQueue("Jan");

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.size()).toEqual(1);

    queue.deQueue();

    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toEqual(0);
  });

  test("Can clear the queue", () => {
    const queue = new Queue();

    queue.enQueue("Jan");
    queue.enQueue("Feb");

    queue.clear();
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTruthy();
  });
});
