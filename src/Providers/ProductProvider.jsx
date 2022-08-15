import { useState } from "react";
import ProductList from "../Contexts/ProductList";

export default function ProductProvider({children}){
  const [products, setProducts] = useState([]);

  return (<ProductList.Provider value={[products, setProducts]}>
    {children}
  </ProductList.Provider>)
}