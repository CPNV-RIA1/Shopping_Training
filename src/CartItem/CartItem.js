"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        if(!this.#isArticleIdValid(articleId)) throw new InvalidArticleIdException();
        if(!this.#isQuantityValid(quantity)) throw new InvalidQuantityException();
        if(!this.#isPriceValid(price)) throw new InvalidPriceException();
        this.#articleId = articleId;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        if(!this.#isQuantityValid(value)) throw new InvalidQuantityException();
        this.#quantity = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        if(!this.#isPriceValid(value)) throw new InvalidPriceException();
        this.#price = value;
    }

    get total() {
        return this.#price * this.#quantity;
    }
    //endregion public methods

    //region private methods
    #isArticleIdValid(articleId){
        return articleId >= 1;
    }
    #isQuantityValid(quantity){
        return quantity >= 1;
    }
    #isPriceValid(quantity){
        return quantity >= 10;
    }
    //endregion private methods
}



