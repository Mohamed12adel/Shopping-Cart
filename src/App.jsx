import "./App.css";
import { useRoutes } from "react-router-dom";
import ProductDetails from "./pages/productDetails";
import ProductList from "./pages/productList";
import CartList from "./pages/cartList";
import ProductTile from "./components/productTile";

function CustomRoutes() {
  const elements = useRoutes([
    {
      path: "/product-details/:id",
      element: <ProductDetails />,
    },
    {
      path: "/product-list",
      element: <ProductList />,
    },
    {
      path: "/cart-list",
      element: <CartList />,
    },
  ]);
  return elements;
}

function App() {
  return (
    <div>
      <CustomRoutes />
    </div>
  );
}

export default App;
