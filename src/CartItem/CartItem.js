"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        if(this.isArticleIdValid(articleId)) throw new InvalidArticleIdException();
        if(this.isQuantityValid(quantity)) throw new InvalidQuantityException();
        this._articleId = articleId;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    get articleId() {
        return this._articleId;
    }

    get name() {
        return this._name;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get total() {
        return this._price * this._quantity;
    }
    //endregion public methods

    //region private methods
    isArticleIdValid(articleId){
        return articleId < 1;
    }
    isQuantityValid(quantity){
        return quantity < 1;
    }
    //endregion private methods
}



