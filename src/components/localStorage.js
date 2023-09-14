const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];
}

const setToLocalStorage = cart => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addItemToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    setToLocalStorage(cart);
}

const removeFromLocalStorage = id => {
    const cart = getStoredCart();
    const remainingBottles = cart.filter(bottleID => bottleID !== id);
    setToLocalStorage(remainingBottles);
}

export { getStoredCart, addItemToLocalStorage, removeFromLocalStorage };