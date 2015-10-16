// http://www.codewars.com/kata/515bb423de843ea99400000a
// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.total = collection.length;
  this.perPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.total;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.total / this.perPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < this.pageCount() - 1) {
    return this.perPage;
  }
  else if (pageIndex == this.pageCount() - 1) {
    return this.total % this.perPage;
  }
  else {
    return -1;
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.total) {
    return -1;
  }
  return Math.floor(itemIndex / this.perPage);
}