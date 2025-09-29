export class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | null {
    return this.isEmpty() ? null : this.items.pop()!;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}