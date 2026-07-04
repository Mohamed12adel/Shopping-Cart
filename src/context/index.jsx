import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartState({ children }) {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  async function fetchAllData() {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    if (result && result.products) {
      setLoading(false);
      setProductList(result.products);
    } else {
      setLoading(false);
      setProductList([]);
    }
  }

  function handleAddToCart(getProductDetails) {
    console.log(getProductDetails);

    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id,
    );

    console.log(findIndexOfCurrentItem);

    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      console.log("its coming here");
      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
          cpyExistingCartItems[findIndexOfCurrentItem].price,
      };
    }

    console.log(cpyExistingCartItems, "cpyExistingCartItems");
    setCartItems(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/cart-list");
  }

  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id,
    );

    if (isFullyRemoveFromCart) {
      cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
    } else {
      cpyExistingCartItems[findIndexOfCurrentCartItem] = {
        ...cpyExistingCartItems[findIndexOfCurrentCartItem],
        quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
        totalPrice:
          (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
          cpyExistingCartItems[findIndexOfCurrentCartItem].price,
      };
    }

    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
  }

  useEffect(() => {
    fetchAllData();
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);
  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartState;
