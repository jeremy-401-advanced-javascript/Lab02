'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

/**
 * Add item to the end of the list
 * @returns {*}
 */
List.prototype.shift = function() {
  let returnValue = this.data;
  delete this.data[0];
  for(let i = 0; i < this.data.length; i++) {
    this.data[i] ;
    console.log(this.data);
  }
  this.length--;

  return returnValue;

};

module.exports = List;
