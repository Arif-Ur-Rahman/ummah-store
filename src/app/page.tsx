import { Suspense, useContext, useEffect } from "react";
import CatagoryList from "./component/home/CatagoryList";
import NewProducts from "./component/home/NewProducts";
import ProductList from "./component/home/ProductList";
import Slider from "./component/home/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClients";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //
  //   console.log(res)
  // }
  //   getProducts();
  // }, [wixClient])
  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res)

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading..."}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Products Catagory
        </h1>
        <CatagoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <NewProducts />
      </div>
    </div>
  );
};

export default HomePage;
