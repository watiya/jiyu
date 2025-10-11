
import {
  Badge,
  Table,
  Dropdown,
  Checkbox,
  TextInput,
  Button,
  Modal,
  Alert,
  Label,
  Select,
  ModalFooter,
  DropdownItem,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  ModalBody,
  ModalHeader,
} from "flowbite-react";
import  { useContext, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// @ts-ignore
import SimpleBar from "simplebar-react";
import { ProductContext } from "src/context/Ecommercecontext";
import { ProductType } from "src/types/apps/eCommerce";
import CardBox from "src/components/shared/CardBox";
import React from 'react';


const ProductTablelist = () => {
  const {
    filteredAndSortedProducts,
    deleteProduct,
    deleteAllProducts,
    searchProducts,
    updateProduct,
    getProductById,
  }: any = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState<ProductType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchProducts(event.target.value);
  };

  const handleEdit = (productId: number) => {
    const product = getProductById(productId);

    if (product) {
      setEditedProduct(product);
      setImageURL(product.photo);
      setOpenEditModal(true);
    }
  };

  const handleCloseEditModals = () => {
    setOpenEditModal(false);
    setEditedProduct(null);
    setImageURL("");
  };

  const handleSaveEdit = () => {
    if (editedProduct) {
      const updatedProduct = {
        ...editedProduct,
        photo: imageURL,
        created: selectedDate || editedProduct.created,
      };
      updateProduct(editedProduct.id.toString(), updatedProduct);
      handleCloseEditModals();
    }
  };

  const toggleSelectAll = () => {
    const selectAllValue = !selectAll;
    setSelectAll(selectAllValue);
    if (selectAllValue) {
      setSelectedProducts(
        filteredAndSortedProducts.map((product: { id: any }) => product.id)
      );
    } else {
      setSelectedProducts([]);
    }
  };

  const toggleSelectProduct = (productId: number) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((id: number) => id !== productId)
      );
    }
  };

  const handleDelete = () => {
    if (selectedProducts.length === 0) {
      setShowAlert(true); // Show alert after adding contact
    } else {
      setOpenDeleteDialog(true);
    }
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedProducts.length > 0) {
      if (selectedProducts.length === filteredAndSortedProducts.length) {
        deleteAllProducts();
      } else {
        selectedProducts.forEach((productId: number) => {
          deleteProduct(productId);
        });
      }
      setSelectedProducts([]);
      setSelectAll(false);
    }
    setOpenDeleteDialog(false);
  };

  const handleDateChange = (created: Date | null) => {
    setSelectedDate(created);
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, created: created || new Date() });
    }
  };

  return (
    <>
      <CardBox>
        {/* Search  */}
        <div className="flex gap-3 justify-between items-center mb-5">
          <TextInput
            id="search"
            placeholder="Search Products"
            className="form-control w-full sm:max-w-60 max-w-full"
            sizing="md"
            required
            onChange={handleSearch}
            value={search}
            icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          />
          <div className="flex gap-4">
            {selectAll ? (
              <Button color={"lightprimary"} className="btn-circle p-0 h-8 w-8">
                <Icon
                  icon="solar:trash-bin-minimalistic-outline"
                  height={18} 
                  onClick={handleDelete}
                />
              </Button>
            ) : (
              <Button color={"lightprimary"} className="btn-circle p-0 h-8 w-8 dark:text-primary">
                <Icon icon="solar:filter-outline" height={18} />
              </Button>
            )}
          </div>
        </div>
        {/* Table */}
        <SimpleBar className="max-h-[580px]">
          <div className="border rounded-md border-ld overflow-x-auto">
            <Table className="dark:bg-darkgray">
              <TableHead>
                <TableHeadCell className="text-base font-semibold">
                  <div className="h-full flex items-center">
                  <Checkbox
                    className="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                  </div>
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold">
                  Products
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold">
                  Date
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold">
                  Status
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold">
                  Price
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold">
                  Action
                </TableHeadCell>
              </TableHead>

              <TableBody className="divide-y divide-border dark:divide-darkborder">
      {filteredAndSortedProducts.map((item: { id: number; photo: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; created: string | number | Date; stock: any; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
        <TableRow key={index}>
          <TableCell className="whitespace-nowrap">
            <div className="h-full flex items-center">
            <Checkbox
              className="checkbox"
              onChange={() => toggleSelectProduct(item.id)}
              checked={selectedProducts.includes(item.id)}
            />
            </div>
          </TableCell>
          <TableCell className="whitespace-nowrap lg:min-w-auto min-w-[250px]">
            <div className="flex gap-3 items-center">
              <img
                src={item.photo}
                alt="icon"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full"
              />
              <div className="text-no-wrap">
                <h6 className="text-base">{item.title}</h6>
                <p className="text-sm text-darklink dark:text-bodytext">
                  {item.category}
                </p>
              </div>
            </div>
          </TableCell>
          <TableCell className="whitespace-nowrap">
            <p className="text-sm text-darklink dark:text-bodytext font-medium">
              {format(new Date(item.created), "E, MMM d yyyy")}
            </p>
          </TableCell>
          <TableCell className="whitespace-nowrap">
            <div className="flex gap-2 text-sm items-center text-darklink dark:text-bodytext font-medium">
              {item.stock ? (
                <Badge color={"success"} className="h-2 w-2 p-0"></Badge>
              ) : (
                <Badge color={"error"} className="h-2 w-2 p-0"></Badge>
              )}
              {item.stock ? "In Stock" : "Out of Stock"}
            </div>
          </TableCell>
          <TableCell className="whitespace-nowrap">
            <h5 className="text-base">${item.price}</h5>
          </TableCell>
          <TableCell className="whitespace-nowrap">
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                  <HiOutlineDotsVertical size={22} />
                </span>
              )}
            >
              <DropdownItem
                className="flex gap-3"
                onClick={() => handleEdit(item.id)}
              >
                <Icon
                  icon="solar:pen-new-square-broken"
                  height={18}
                />
                <span>Edit</span>
              </DropdownItem>
              <DropdownItem
                onClick={handleDelete}
                className="flex gap-3"
              >
                <Icon
                  icon="solar:trash-bin-minimalistic-outline"
                  height={18}
                />
                <span>Delete</span>
              </DropdownItem>
            </Dropdown>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
            </Table>
          </div>
        </SimpleBar>
      </CardBox>
      <Modal
        show={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        title="Delete Confirmation"
        size="md"
      >
        <p className="text-center text-ld text-lg my-6">
          Are you sure you want to delete selected products?
        </p>
        <ModalFooter className="flex justify-center">
          <Button color={"error"} onClick={handleConfirmDelete}>
            Delete
          </Button>
          <Button onClick={handleCloseDeleteDialog} color={"lighterror"}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* Edit Modal */}
      <Modal
        show={openEditModal}
        onClose={handleCloseEditModals}
        title="Edit Product"
        size="lg"
      >
        <ModalHeader>Edit Item</ModalHeader>
        <ModalBody className="pt-0">
          <div className="grid grid-cols-12 gap-6">
            {editedProduct && (
              <>
                <div className="col-span-12 lg:col-span-6">
                  <Label
                    htmlFor="ttl"
                    className="mb-2 block capitalize"
                  >Title</Label>
                  <TextInput
                    id="ttl"
                    value={editedProduct.title}
                    className="form-control"
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-span-12  lg:col-span-6">
                  <Label
                    htmlFor="price"
                    className="mb-2 block capitalize"
                  >Price</Label>
                  <TextInput
                    id="price"
                    className="form-control"
                    value={editedProduct.price}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-span-12  lg:col-span-6">
                  <Label
                    htmlFor="stck"
                    className="mb-2 block capitalize"
                  >Stock</Label>
                  <Select
                    id="stck"
                    className="select-md"
                    value={editedProduct.stock ? "In Stock" : "Out of Stock"}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        stock: e.target.value === "In Stock",
                      })
                    }
                    required
                  >
                    <option value="In Stock">IN Stock</option>
                    <option value="Out of Stock">Out Stock</option>
                  </Select>
                </div>
                <div className="col-span-12  lg:col-span-6">
                  <Label
                    htmlFor="dt"
                    className="mb-2 block capitalize"
                  >Date</Label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    className="form-control-input w-full max-w-full py-[10px]"
                    value={editedProduct.created}
                    id="dt"
                  />
                </div>
                <div className="col-span-12  lg:col-span-6">
                  <Label
                    htmlFor="img"
                    className="mb-2 block capitalize"
                  >Image URL</Label>
                  <TextInput
                    id="img"
                    className="form-control"
                    placeholder="Paste image URL"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                  />
                </div>

                <div className="col-span-12 ">
                  <Label htmlFor="imgPreview" className="mb-2 block capitalize" >Image Preview</Label>
                  {imageURL && (
                    <img
                      id="imgPreview"
                      src={imageURL}
                      alt="Preview"
                      className="w-full max-w-[200px] h-auto object-cover rounded-lg"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color={"primary"} onClick={handleSaveEdit}>
            Save
          </Button>
          <Button onClick={handleCloseEditModals} color={"lighterror"}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {showAlert && (
        <Alert
          color="warning"
          rounded
          className="fixed mx-auto start-0 end-0 top-3 w-fit z-50"
          icon={() => (
            <Icon
              icon="solar:archive-minimalistic-broken"
              className=""
              height={22}
            />
          )}
        >
          <span className="ms-2">Please select products to delete.</span>
        </Alert>
      )}
    </>
  );
};

export default ProductTablelist;


