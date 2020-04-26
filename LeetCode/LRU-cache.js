/**
 * @param {number} capacity
 */
var LRUCache2 = function(capacity) {
        this.cap = +capacity;
        this.cache = {}; // use a map for order preservation
        this.length = 0;
        this.frequency = {};
        this.ms = 1;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache2.prototype.get = function(key) {
    if (this.cache[key] && this.cap > 1) {
        this.frequency[key] = `${key}-${Date.now()+this.ms}`;
    }

    return this.cache[key] ? this.cache[key] : -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache2.prototype.put = function(key, value) {
    if (this.cap === 1) {
        this.cache = {};
        this.cache[key] = value;
    } else if (this.length === this.cap) {
        let vals = Object.values(this.frequency);
        let LRU = Date.now()+this.ms;
        let lruK = null;

        for (let i in vals) {
            let cur = vals[i].split('-');
            let k = cur[0];
            let n = cur[1];

            if (n < LRU) {
                LRU = n;
                lruK = k;
            }
        }

        delete this.frequency[lruK]
        delete this.cache[lruK];
    } else {
        this.length++;
    }
    if (this.cap !== 1) {
        this.cache[key] = value;
        this.frequency[key] = `${key}-${Date.now()+this.ms++}`;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
  
      const v = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, v);
      return this.cache.get(key);
    };
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
      }
    };
  }


let cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4

let c = new LRUCache(1)