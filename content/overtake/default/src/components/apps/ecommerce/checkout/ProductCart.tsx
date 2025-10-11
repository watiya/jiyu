import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import  { useContext } from "react";
import { Icon } from "@iconify/react";
import OrderSummary from "./OrderSummary";
import { ProductContext } from "src/context/Ecommercecontext";
import { ProductType } from "src/types/apps/eCommerce";




const ProductCart = ({ Discount, total }: any) => {
  const {
    cartItems,
    incrementQuantity,
    removeFromCart,
    decrementQuantity,
  } = useContext(ProductContext);

  return (
    <>
      {/* Table  */}
      <div className="overflow-x-auto">
        <Table className="">
          <TableHead>
            <TableHeadCell className="text-sm font-semibold py-3 md:min-w-[100px] min-w-[250px]">
              Product
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold py-3">
              Quantity
            </TableHeadCell>
            <TableHeadCell className="text-sm font-semibold py-3 text-end">
              Price
            </TableHeadCell>
          </TableHead>
          {cartItems?.map((product: ProductType) => (
            <TableBody className="divide-y divide-border dark:divide-darkborder">
              <TableRow>
                <TableCell className="whitespace-nowrap py-5 lg:min-w-auto min-w-[300px]">
                  <div className="flex gap-3 items-center ">
                    <img
                      src={product.photo}
                      alt="product"
                      className="rounded-md"
                      width={80}
                      height={80}
                    />
                    <div className="">
                      <h6 className="text-base">{product.title}</h6>
                      <p className="text-sm text-darklink dark:text-bodytext mb-1">  {product.category}</p>
                      <Icon icon="solar:trash-bin-minimalistic-outline" height={15} className="text-error cursor-pointer" onClick={() => removeFromCart(product.id)} />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap py-5">
                  <form className="max-w-xs">
                    <div className="relative flex items-center text-wrap">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        onClick={() => decrementQuantity(product.id)}
                        className="focus:ring-0 focus:outline-hidden border border-ld h-8 min-w-10 rounded-s-md rounded-e-none text-center flex justify-center items-center hover:bg-lightprimary hover:text-primary"
                      >
                        <span className="text-2xl">-</span>
                      </button>

                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter
                        aria-describedby="helper-text-explanation"
                        className="rounded-s-none! rounded-e-none! text-center h-8 border-x-0! w-fit max-w-12 border-y border-ld !focus:ring-0 focus:border-ld focus:ring-transparent focus:ring-offset-0 bg-transparent text-sm"
                        placeholder="0"
                        required
                        value={product.qty}
                      />

                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="quantity-input"
                        onClick={() => incrementQuantity(product.id)}
                        className="focus:ring-0 focus:outline-hidden border border-ld h-8 min-w-10 rounded-e-md rounded-s-none text-center flex justify-center items-center hover:bg-lightprimary hover:bg-lightprimary hover:text-primary"
                      >
                        <span className="text-xl">+</span>
                      </button>
                    </div>
                  </form>
                </TableCell>
                <TableCell className="whitespace-nowrap py-5 text-end">
                  <h5 className="text-base">${product.price * product.qty}</h5>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>

      {/* Order Summery */}
      <OrderSummary Discount={Discount} total={total} />
    </>
  );
};

export default ProductCart;
