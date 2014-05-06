var parameterHelper = require('../util/parameterHelper');
var checkSum = require('../util/checkSum');

function Mandant(data) {
    this._id = data.id || null;
    this._name = data.name || null;
}

Mandant.prototype.id = function (id) {
    if (id !== undefined) {
        this._id = id;
    }

    return this._id;
};

Mandant.prototype.name = function (name) {
    if (name !== undefined) {
        this._name = name;
    }

    return this._name;
};

Mandant.prototype.checkSum = function () {
    return checkSum(this.id(), this.name());
};

module.exports = Mandant;