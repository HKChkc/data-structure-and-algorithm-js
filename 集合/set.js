class Set {
  constructor() {
    this.items = {};
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  values() {
    return Object.values(this.items);
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const values = this.values;
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString}, ${values[i].toString()}`;
    }
    return objString;
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set();
    this.values.forEach(value => unionSet.add(value));
    otherSet.values.forEach(value => unionSet.add(value));
    return unionSet;
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length > values.length) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  // 子集
  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubSet = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubSet = false;
        return false;
      }
      return true;
    });
    return isSubSet;
  }
}
