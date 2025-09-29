export class Queue<T> {
  private items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | null {
    return this.isEmpty() ? null : this.items.shift()!;
  }

  front(): T | null {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}