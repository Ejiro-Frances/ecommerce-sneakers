import Header from "./components/header";
import Product from "./components/product";
import ProductDetails from "./components/product-details";

const App = () => {
  return (
    <div>
      <Header />
      <main className="w-full md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center md:px-20 md:py-20">
        <Product />

        <ProductDetails />
      </main>
    </div>
  );
};

export default App;
