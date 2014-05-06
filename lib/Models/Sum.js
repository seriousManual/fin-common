var parameterHelper = require('../util/parameterHelper');
var checkSum = require('../util/checkSum');

function Sum(data) {
    this._id = data.id || null;
    this._mandant = data.mandant || null;
    this._date = parameterHelper.validDate(data.date);
    this._type = parameterHelper.isSet(data.type);
    this._amount = parameterHelper.isFloat(data.amount);
}

Sum.prototype.id = function (id) {
    if (id !== undefined) {
        this._id = id;
    }

    return this._id;
};

Sum.prototype.mandant = function (mandant) {
    if (mandant !== undefined) {
        this._mandant = mandant;
    }

    return this._mandant;
};

Sum.prototype.date = function (date) {
    if (date !== undefined) {
        this._date = parameterHelper.validDate(date);
    }

    return this._date;
};

Sum.prototype.type = function (type) {
    if (type !== undefined) {
        this._type = type;
    }

    return this._type;
};

Sum.prototype.amount = function (amount) {
    if (amount !== undefined) {
        this._amount = parameterHelper.isFloat(amount);
    }

    return this._amount;
};

Sum.prototype.checkSum = function () {
    return checkSum(this.id(), this.mandant(), this.date(), this.type(), this.amount());
};

module.exports = Sum;