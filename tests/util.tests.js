var moment = require('moment');
var expect = require('chai').expect;

var parameterHelper = require('../').parameterHelper;
console.log( require('../') );
describe('util', function () {
    describe('parameterHelper', function () {
        describe('validDate', function () {
            it('should return a date', function () {
                expect(parameterHelper.validDate('2010-01-01').isValid()).to.be.true;
            });

            it('should return a date', function () {
                expect(parameterHelper.validDate(moment('2010-01-01')).isValid()).to.be.true;
            });

            it('should throw on undefined date', function () {
                expect(function () {
                    parameterHelper.validDate();
                }).to.throw(/not allowed/);
            });

            it('should throw on null date', function () {
                expect(function () {
                    parameterHelper.validDate(null);
                }).to.throw(/not allowed/);
            });

            it('should throw on invalid date', function () {
                expect(function () {
                    parameterHelper.validDate('foobar');
                }).to.throw(/invalid date: foobar/);
            });
        });

        describe('geDate', function () {
            it('should throw', function () {
                expect(function () {
                    parameterHelper.geDate();
                }).to.throw(/not allowed/);
            });

            it('should throw', function () {
                expect(function () {
                    parameterHelper.geDate('2013-01-01', '2014-01-01');
                }).to.throw(/should be greater/);
            });

            it('should return', function () {
                expect(parameterHelper.geDate('2014-01-01', '2013-01-01').format('YYYY-MM-DD')).to.deep.equal('2014-01-01');
            });
        });

        describe('notNull', function () {
            it('should return anything', function () {
                expect(parameterHelper.notNull('foo')).to.equal('foo');
            });

            it('should throw', function () {
                expect(function () {
                    parameterHelper.notNull(null);
                }).to.throw(/value not allowed/);
            });
        });

        describe('notUndefined', function () {
            it('should return anything (undefined test)', function () {
                expect(parameterHelper.notUndefined('foo')).to.equal('foo');
            });

            it('should throw (undefined test)', function () {
                expect(function () {
                    parameterHelper.notUndefined();
                }).to.throw(/not allowed/);
            });
        });

        describe('isSet', function () {
            it('should throw (isSet)', function () {
                expect(function () {
                    parameterHelper.isSet();
                }).to.throw(/not allowed/);
            });

            it('should throw (isSet)', function () {
                expect(function () {
                    parameterHelper.isSet(null);
                }).to.throw(/not allowed/);
            });

            it('should return anything (undefined test)', function () {
                expect(parameterHelper.isSet('foo')).to.equal('foo');
            });
        });

        describe('isArray', function () {
            it('should throw (isArray)', function () {
                expect(function () {
                    parameterHelper.isArray('foo');
                }).to.throw(/not an array: foo/);
            });

            it('should return anything (isArray)', function () {
                expect(parameterHelper.isArray([])).to.deep.equal([]);
            });
        });

        describe('isNonEmptyArray', function () {
            it('should throw (isNonEmptyArray)', function () {
                expect(function () {
                    parameterHelper.isNonEmptyArray('foo');
                }).to.throw(/not an array: foo/);
            });

            it('should throw (isNonEmptyArray)', function () {
                expect(function () {
                    parameterHelper.isNonEmptyArray([]);
                }).to.throw(/empty array not allowed/);
            });

            it('should return anything (isNonEmptyAray)', function () {
                expect(parameterHelper.isNonEmptyArray([1])).to.deep.equal([1]);
            });
        });

        describe('isInteger', function () {
            it('should throw (isInteger)', function () {
                expect(function () {
                    parameterHelper.isInteger('foo');
                }).to.throw(/not a number: foo/);
            });

            it('should return anything (isInteer)', function () {
                expect(parameterHelper.isInteger(1)).to.equal(1);
            });
        });

        describe('isFloat', function () {
            it('should throw (isFLoat)', function () {
                expect(function () {
                    parameterHelper.isFloat('foo');
                }).to.throw(/not a number: foo/);
            });

            it('should return anything (isFloat)', function () {
                expect(parameterHelper.isFloat(0.1)).to.equal(0.1);
            });

            it('should return anything (isFloat)', function () {
                expect(parameterHelper.isFloat(1)).to.equal(1);
            });
        });

        describe('ge', function () {
            it('should throw (ge)', function () {
                expect(function () {
                    parameterHelper.ge(1, 1000);
                }).to.throw(/should be greater\/equals 1000/);
            });

            it('should return anything (ge)', function () {
                expect(parameterHelper.ge(1, 1)).to.equal(1)
            });

            it('should return anything (ge)', function () {
                expect(parameterHelper.ge(1000, 1)).to.equal(1000);
            });
        });
    });
});