const EmptyCartException = require("./EmptyCartException");

module.exports = class Cart {

    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items;
    }
    get items(){
        if(this.#areItemsEmpty()) throw new EmptyCartException();
        return this.#items;
    }
    //endregion public methods

    //region private methods
    #areItemsEmpty(){
        return this.#items < 1;
    }
    //endregion private methods
}



