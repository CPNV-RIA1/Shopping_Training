const EmptyCartException = require("./EmptyCartException");
const UpdateCartException = require("./UpdateCartException");

module.exports = class Cart {

    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items ?? []
    }
    get items(){
        this.#ensureItemsNotEmpty(this.#items)
        return this.#items;
    }
    get total(){
        this.#ensureItemsNotEmpty(this.#items)
        return this.#items.reduce((accumulator, item) => accumulator + item.total, 0);
    }
    //endregion public methods

    //region private methods
    #ensureItemsNotEmpty(){
        if(this.#areItemsEmpty(this.#items)) throw new EmptyCartException();
    }
    #areItemsEmpty(items){
        return !items || items < 1;
    }
    //endregion private methods
}



