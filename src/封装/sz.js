// 封装
var Person = (function (window) {
    var Person = function (id) {
        return new Person.fn.init(id);
    }
    Person.fn = Person.prototype = {
        constructor: Person,
        init: function (id) {
            this.id = document.getElementById(id);
            this.id.appendChild(this.addinput('text'));
            this.id.onclick = function () {
                Person.fn.addclick()
            }
        },
        addinput: function (type) {
            var input = document.createElement('input');
            input.setAttribute('type', type);
            return input;
        },
        addclick: function () {
            alert('bbbbbb');
        }
    }
    Person.fn.init.prototype = Person.fn;
    return Person;
})();




$(function () {
    Person('box');
})