// 请使用ES6的类（class）结构实现简单的"购物车"数据管理功能，包含以下子功能：

// 1）添加商品；

// 2）移除商品；

// 3）计算总价；

// 4）清空购物车等功能，

// 要求：使用私有字段和getter/setter方法。

class shoppingCart{
    #items = [];
    addItem(product,quantity){
        const existing = this.#items.find(item => item.product.id === product.id);
        if(existing){
            existing.quantity += quantity;
        }else{
            this.#items.push({product,quantity});
        }
    }
    removeItem(productId){
        this.#items = this.#items.filter(item => item.product.id !== productId);
    }
    totalPrice(){
        return this.#items.reduce(
            (sum,item) => sum + item.product.price * item.quantity,0
        );
    }
    clear(){
        this.#items = [];
    }
    getItems(){
        return [...this.#items];
    }
}