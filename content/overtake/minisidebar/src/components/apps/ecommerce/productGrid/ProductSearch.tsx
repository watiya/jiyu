import { Button, TextInput } from "flowbite-react";
import  { useContext } from "react";
import { Icon } from "@iconify/react";
import { ProductContext } from "src/context/Ecommercecontext";
import React from 'react';


type Props = {
  onClickFilter: (event: React.MouseEvent<HTMLElement>) => void;
};
const ProductSearch = ({ onClickFilter }: Props) => {
  const { searchProducts } = useContext(ProductContext);

  return (
    <>
      <div className="flex justify-between items-center lg:gap-0 gap-3">
        <div className="flex gap-3 shrink-0">
          <h5 className="card-title lg:flex hidden">Products</h5>
          <Button
            color={"lightprimary"}
            className="btn-circle p-0 lg:hidden flex"
            onClick={onClickFilter}
          >
            <Icon icon="solar:hamburger-menu-linear" height={18} />
          </Button>
        </div>

        <TextInput
          id="search"
          placeholder="Search Products"
          className="form-control"
          sizing="md"
          required
          onChange={(event) => searchProducts(event.target.value)}
          icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
        />
      </div>
    </>
  );
};

export default ProductSearch;
