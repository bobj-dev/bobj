Vector = function(x, y) {
    return [x, y];
}

var x = 0;
var y = 1;

Vector.prototype.add = function(vec) {
    this[x] += vec[x];
    this[y] += vec[y];
}

Vector.prototype.sub = function(vec) {
    this[x] -= vec[x];
    this[y] -= vec[y];
}

Vector.prototype.mul = function(vec) {
    this[x] *= vec[x];
    this[y] *= vec[y];
}

Vector.prototype.div = function(vec) {
    this[x] /= vec[x];
    this[y] /= vec[y];
}

Vector.prototype.mod = function(vec) {
    this[x] %= vec[x];
    this[y] %= vec[y];
}
