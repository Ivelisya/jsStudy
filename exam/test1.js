class ShoppingCart {
    #items = [];
    addItem(product, quantity = 1) {

        const existing = this.#items.find(item => item.product.id === product.id);

        if (existing) {

            existing.quantity += quantity;

        } else {

            this.#items.push({ product, quantity });

        }

    };

    removeItem(productId) {

        this.#items = this.#items.filter(item => item.product.id !== productId);

    };

    getTotalPrice() {  

        return this.#items.reduce(

            (sum, item) => sum + item.product.price * item.quantity, 0);

    };

    clear() {

        this.#items = [];

    };

    getItems() {

        return [...this.#items]; 

    };

}