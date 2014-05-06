var parameterHelper = require('../util/parameterHelper');
var checkSum = require('../util/checkSum');

function Position(data) {
    this._id = data.id || null;
    this._mandant = data.mandant || null;
    this._date = parameterHelper.validDate(data.date);
    this._purpose = parameterHelper.isSet(data.purpose);
    this._classification = data.classification || null;
    this._partner = parameterHelper.isSet(data.partner);
    this._partnerAccountNumber = parameterHelper.isSet(data.partnerAccountNumber);
    this._partnerBank = parameterHelper.isSet(data.partnerBank);
    this._amount = parameterHelper.isFloat(data.amount);
}

Position.prototype.id = function (id) {
    if (id !== undefined) {
        this._id = id;
    }

    return this._id;
};

Position.prototype.mandant = function (mandant) {
    if (mandant !== undefined) {
        this._mandant = mandant;
    }

    return this._mandant;
};

Position.prototype.date = function (date) {
    if (date !== undefined) {
        this._date = parameterHelper.validDate(date);
    }

    return this._date;
};

Position.prototype.purpose = function (purpose) {
    if (purpose !== undefined) {
        this._purpose = purpose;
    }

    return this._purpose;
};

Position.prototype.classification = function (classification) {
    if (classification !== undefined) {
        this._classification = classification;
    }

    return this._classification;
};

Position.prototype.amount = function (amount) {
    if (amount !== undefined) {
        this._amount = parameterHelper.isFloat(amount);
    }

    return this._amount;
};

Position.prototype.partner = function (partner) {
    if (partner !== undefined) {
        this._partner = parameterHelper.isSet(partner);
    }

    return this._partner;
};

Position.prototype.partnerAccountNumber = function (partnerAccountNumber) {
    if (partnerAccountNumber !== undefined) {
        this._partnerAccountNumber = parameterHelper.isSet(partnerAccountNumber);
    }

    return this._partnerAccountNumber;
};

Position.prototype.partnerBank = function (partnerBank) {
    if (partnerBank !== undefined) {
        this._partnerBank = parameterHelper.isSet(partnerBank);
    }

    return this._partnerBank;
};

Position.prototype.checkSum = function () {
    return checkSum(this.id(), this.mandant(), this.date(), this.purpose(), this.classification(), this.amount());
};

module.exports = Position;