
import { Drawer } from "flowbite-react";
import { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { ProductProvider } from "src/context/Ecommercecontext";
import CardBox from "src/components/shared/CardBox";

const EcommerceShop = () => {
  const [isOpenShop, setIsOpenShop] = useState(false);
  const handleClose = () => setIsOpenShop(false);

  return (
    <>
      <ProductProvider>
        <CardBox className="p-0">
          {/* ------------------------------------------- */}
          {/* Left part */}
          {/* ------------------------------------------- */}
          <div className="flex"> 
            <Drawer
              open={isOpenShop}
              onClose={handleClose}
              className="lg:relative lg:translate-none lg:h-auto lg:bg-transparent max-w-[250px] w-full lg:z-0"
            >
              <ProductFilter />
            </Drawer>
            {/* ------------------------------------------- */}
            {/* Right part */}
            {/* ------------------------------------------- */}
            <div className="p-6 w-full">
              <ProductList openShopFilter={setIsOpenShop} />
            </div>
          </div>
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default EcommerceShop;
