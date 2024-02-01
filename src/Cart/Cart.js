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
        this.#ensureItemsNotEmpty(this.#items)
        return this.#items;
    }
    get total(){
        this.#ensureItemsNotEmpty(this.#items)
        return this.#items.reduce((accumulator, item) => accumulator + item.total, 0);
    }
    count(distinct = false){
        this.#ensureItemsNotEmpty(this.#items)
        return distinct ? this.#items.length : this.#items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
    //endregion public methods

    //region private methods
    #ensureItemsNotEmpty(items){
        if(this.#areItemsEmpty(items)) throw new EmptyCartException();
    }
    #areItemsEmpty(items){
        return !items || items < 1;
    }
    //endregion private methods
}



