// pageobjects/InventoryPage.js

class InventoryPage {
    get addToCartButton() { return $('button[data-test="add-to-cart-sauce-labs-backpack"]'); } // Change the selector based on the item you want
    get cartIcon() { return $('.shopping_cart_link'); } // Cart icon to navigate to cart
    get cartItemCount() { return $('.shopping_cart_badge'); } // Cart item count

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = new InventoryPage();
