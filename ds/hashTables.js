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
  } //O(1)

  set(key, value) {
    let address = this._hash(key); //store data that we gonna insert with the key and value in this address place that we created by our hashed function, and we give it the key of "grapes"
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.log(this.data)
    return this.data;
  } // O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          // if current bucket by which is the index so remember is going to say zero which is going to grab this then one which is going to grab this if 'currentBucket' the grapes. So if I do zero here that means grab the first in our case is the [i] so its gonna be the 0 first grab this first array then grab the zero index within this array which will be grapes.
          return currentBucket[i][1];
        }
      }
    } //O(1)
    return undefined;
  }

  keys() {
    const keyArrays = [];
    // console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArrays.push(this.data[i][0][0]);
      }
    }
    return keyArrays;
  }
  //bonus : key()without collision
  // key() {
  //   if(!this.data.length) {
  //     return undefined
  //   }
  //   let result = []
  //   //loop through all the elements
  //   for (let i = 0 ; i < this.data.length; i++) {
  //     //if it's not an empty memory cell
  //     if (this.data[i] && this.data[i].length) {
  //       //but also loop althrough the potential collisions
  //       if (this.data.length > 1) {
  //         for ( let j = 0; j < this.data[i].length; j++) {
  //           result.push(this.data)[i][j][0]
  //         }
  //       } else {
  //         result.push(this.data[i][0])
  //       }
  //     }
  //   }
  //   return result;
  // }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.keys();
