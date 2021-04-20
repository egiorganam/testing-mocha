class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.length) return new Error('OutOfBounds')
    return this.items[pos-1]

    // pos > this.length ? new Error('OutOfBounds') : this.items[pos - 1]
  }

  max() {
    if(this.items.length === 0) return new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if(this.items.length === 0) return new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {
    if(this.items.length === 0) return 0
    return this.items.reduce((acc, b) => acc + b)
  }

  avg() {
    return this.sum() / this.length
  }
}

module.exports = SortedList
