// http://www.codewars.com/kata/526dad7f8c0eb5c4640000a4

var Vector = function (components) {
  return {
    dims: components.length,
    components: components,
    add: function (operand) {
      if (operand.dims != this.dims) {
        throw new Error('Vectors are of different dimensions!')
      }
      else {
        return new Vector(operand.components.map(function(e, ind) { return components[ind] + e; }));
      }
    },
    subtract: function (operand) {
      if (operand.dims != this.dims) {
        throw new Error('Vectors are of different dimensions!')
      }
      else {
        return new Vector(operand.components.map(function(e, ind) { return components[ind] - e; }));
      }
    },
    dot: function (operand) {
      if (operand.dims != this.dims) {
        throw new Error('Vectors are of different dimensions!')
      }
      else {
        return operand.components.map(function(e, ind) { return e * components[ind]; }).reduce(function(p, c) { return p + c; });
      }
    },
    norm: function () {
      return Math.sqrt(components.map(function(e) { return e * e; }).reduce(function(p, c) { return p + c; }));
    },
    toString: function () {
      return '(' + components.join(',') + ')';
    },
    equals: function (operand) {
      var i = 0;
      var eq = (operand.dims == this.dims);
      while (eq && i < this.dims) {
        eq = (this.components[i] == operand.components[i]);
        i++;
      }
      return eq;
    }
  }
};