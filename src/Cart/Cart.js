
module.exports = class Cart {

    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items;
    }
    get items(){
        return this.#items;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



