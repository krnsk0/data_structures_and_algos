class HashTable {
  constructor(size=181) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0 ; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total
  }

  // uses separate chaining
  set(key, value) {
    let index = this._hash(key);
    // if no array create array and push
    if (this.keyMap[index] === undefined) this.keyMap[index] = [];

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    let bucket = this.keyMap[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] == key) return bucket[i][1];
      }
    }
    return undefined;
  }

  // returns duplicates
  keys() {
    let output = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
      if (this.keyMap[i]) {
        let bucket = this.keyMap[i];
        for (let j = 0; j < bucket.length; j += 1) {
          let thisKey = bucket[j][0]
          output.push(thisKey)
        }
      }
    }
    return output
  }

  // doesn't return duplicates
  values() {
    let output = [];
    for (let i = 0; i < this.keyMap.length; i += 1) {
      if (this.keyMap[i]) {
        let bucket = this.keyMap[i];
        for (let j = 0; j < bucket.length; j += 1) {
          let thisVal = bucket[j][1]
          if (!output.includes(thisVal)) output.push(thisVal)
        }
      }
    }
    return output
  }
}

ht = new HashTable()
ht.set('name', 'jon')
ht.set('age', 31)
ht.set('occupation', 'unemployed')
ht.set('city', 'chicago')
ht.set('state', 'IL')
ht.set('state', 'AZ')
// console.log(ht.keyMap);
console.log('keys: ', ht.keys());
console.log('values: ', ht.values());
