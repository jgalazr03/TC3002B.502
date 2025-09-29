export class Dictionary<K, V> {
  private items: Map<K, V> = new Map();

  set(key: K, value: V): void {
    this.items.set(key, value);
  }

  get(key: K): V | undefined {
    return this.items.get(key);
  }

  has(key: K): boolean {
    return this.items.has(key);
  }

  delete(key: K): boolean {
    return this.items.delete(key);
  }

  keys(): K[] {
    return Array.from(this.items.keys());
  }

  values(): V[] {
    return Array.from(this.items.values());
  }
}