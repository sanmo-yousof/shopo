const WISHLIST_KEY = "wishlist";

const getWishlist = () => {
  if (typeof window === "undefined") return [];
  let value = localStorage.getItem(WISHLIST_KEY);
  return value ? JSON.parse(value) : [];
};

const setWishlist = (id) => {
  const oldArray = getWishlist();
  if (!oldArray.includes(id)) {
    const updated = [...oldArray, id];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
    return true;
  }
  return false;
};

const removeWishlist = (id) => {
  const updated = getWishlist().filter((itemId) => itemId !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("wishlistUpdated"));
};

// cart
const CART_KEY = "cart";

const getCart = () => {
  if (typeof window === "undefined") return [];
  let value = localStorage.getItem(CART_KEY);
  return value ? JSON.parse(value) : [];
};

const setCart = (data) => {
  const oldArray = getCart();
  const existingIndex = oldArray.findIndex(
    (item) => item.id === data.id && item.orderColor === data.orderColor
  );

  let updated;

  if (existingIndex !== -1) {
    updated = [...oldArray];
    updated[existingIndex].orderQuantity += data.orderQuantity || 1;
  } else {
    updated = [
      ...oldArray,
      { ...data, orderQuantity: data.orderQuantity || 1 },
    ];
  }
  localStorage.setItem(CART_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("CartUpdated"));
  return true;
};

const removeCart = (id, orderColor) => {
  const updated = getCart().filter(
    (item) => !(item.id === id && item.orderColor === orderColor)
  );
  localStorage.setItem(CART_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("CartUpdated"));
};


const updateCartQuantity = (id, orderColor, action) => {
  let cart = getCart();

  cart = cart.map((item) => {
    if (item.id === id && item.orderColor === orderColor) {
      let newQty = item.orderQuantity;
      if (action === "increment") {
        newQty += 1;
      } else if (action === "decrement" && newQty > 1) {
        newQty -= 1;
      }
      return { ...item, orderQuantity: newQty };
    }
    return item;
  });

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("CartUpdated"));
};


export {
  setWishlist,
  getWishlist,
  removeWishlist,
  getCart,
  removeCart,
  setCart,
  updateCartQuantity
};
