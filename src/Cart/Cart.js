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
        this.#ensureItemsNotEmpty()
        return this.#items;
    }
    get total(){
        this.#ensureItemsNotEmpty()
        return this.#items.reduce((accumulator, item) => accumulator + item.total, 0);
    }
    count(distinct = false){
        this.#ensureItemsNotEmpty()
        return distinct ? this.#items.length : this.#items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
    //endregion public methods

    //region private methods
    #ensureItemsNotEmpty(){
        if(this.#areItemsEmpty()) throw new EmptyCartException();
    }
    #areItemsEmpty(){
        return !this.#items || this.#items.length < 1;
    }
    //endregion private methods
}



