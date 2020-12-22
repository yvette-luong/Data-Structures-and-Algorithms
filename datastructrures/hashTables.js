class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  // explain to _hash(key) method: So this method allows us to say at index whatever we put in the parameter.So let's say we're looking at index of I the very first on will be g.We're going to get the character code for G.That is a number where we multiply that by the index.
  _hash(key) {
    // the'underscore' here is a common standard which is to put 'underscore' here and the javascript world which says this is a private property
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    //   console.log(hash)
    } 
    return hash;
  }

  set(key, value) {
    let address = this._hash(key); //store data that we gonna insert with the key and value in this address place that we created by our hashed function, and we give it the key of "grapes"
    if (!this.data[address]) { 
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.log(this.data)
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } 
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");