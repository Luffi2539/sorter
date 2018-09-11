class Sorter {
  constructor() {
    this.stash = [];
    this.trigger = function(a,b) {
      return a-b;
    };
  }

  add(element) {
    this.stash.push(element);
  }

  at(index) {
    return this.stash[index];
  }

  get length() {
    return this.stash.length;
  }

  toArray() {
    return this.stash
  }

  sort(indices) {
    indices.sort();
    var tempStash=[];
    for(var i=0;i<indices.length;i++){
    tempStash.push(this.stash[indices[i]]);
      }
    tempStash.sort(this.trigger);
    for (var j=0;j<tempStash.length;j++){
      this.stash[indices[j]]=tempStash[j];
    }
        
  }

  setComparator(compareFunction) {
    this.trigger=compareFunction;
  }
}

module.exports = Sorter;