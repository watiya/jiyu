
import  { useContext, useState, useEffect } from "react";
import { Alert, Button, Label, Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Tooltip } from "flowbite-react";
import { format, isValid, } from "date-fns";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router";
import { InvoiceContext } from "src/context/InvoiceContext";
import React from 'react';

const EditInvoicePage = () => {
  const { invoices, updateInvoice } = useContext(InvoiceContext);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [editedInvoice, setEditedInvoice]: any = useState(null);
  
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);
  let getTitle =  pathName.split("/").pop();
  if(getTitle){
    getTitle = decodeURIComponent(getTitle);
  }


  const navigate = useNavigate();

  useEffect(() => {
    if (invoices.length > 0) {
      if (getTitle) {
        const invoice = invoices.find(
          (inv: { billFrom: string }) => inv.billFrom === getTitle
        );
        if (invoice) {
          setSelectedInvoice(invoice);
          setEditedInvoice({ ...invoice });
          setEditing(true);
        } else {
          setSelectedInvoice(invoices[0]);
          setEditedInvoice({ ...invoices[0] });
          setEditing(true);
        }
      } else {
        setSelectedInvoice(invoices[0]);
        setEditedInvoice({ ...invoices[0] });
        setEditing(true);
      }
    }
  }, [getTitle, invoices]);



  const handleSave = async () => {
    try {
      await updateInvoice(editedInvoice);
      setSelectedInvoice({ ...editedInvoice });
      setEditing(false);
      setShowAlert(true);
      navigate('/apps/invoice/list');
    } catch (error) {
      console.error("Error updating invoice:", error);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };



  // Function to cancel editing
  const handleCancel = () => {
    setEditing(false);
  };
  const handleOrderChange = (
    index: string | number | any,
    field: string,
    value: string | number
  ) => {
    const updatedOrders = [...editedInvoice.orders];
    updatedOrders[index][field] = value;

    // Calculate unitTotalPrice for the changed item
    if (field === "unitPrice" || field === "units") {
      updatedOrders[index].unitTotalPrice =
        updatedOrders[index].unitPrice * updatedOrders[index].units;
    }

    // Update editedInvoice with updated orders and recalculate totals
    const updatedInvoice = {
      ...editedInvoice,
      orders: updatedOrders,
      totalCost: calculateTotalCost(updatedOrders),
      vat: calculateVAT(updatedOrders),
      grandTotal: calculateGrandTotal(
        calculateTotalCost(updatedOrders),
        calculateVAT(updatedOrders)
      ),
    };

    setEditedInvoice(updatedInvoice);
  };
  // Function to add a new item to the invoice
  const handleAddItem = () => {
    const newItem = {
      itemName: "",
      unitPrice: 0,
      units: 0,
      unitTotalPrice: 0,
      vat: 0,
    };
    const updatedOrders = [...editedInvoice.orders, newItem];

    // Update editedInvoice with updated orders and recalculate totals
    const updatedInvoice = {
      ...editedInvoice,
      orders: updatedOrders,
      totalCost: calculateTotalCost(updatedOrders),
      vat: calculateVAT(updatedOrders),
      grandTotal: calculateGrandTotal(
        calculateTotalCost(updatedOrders),
        calculateVAT(updatedOrders)
      ),
    };
    setEditedInvoice(updatedInvoice);
  };

  // Function to delete an item from the invoice
  const handleDeleteItem = (index: any) => {
    const updatedOrders = editedInvoice.orders.filter(
      (_: any, i: any) => i !== index
    );

    const updatedInvoice = {
      ...editedInvoice,
      orders: updatedOrders,
      totalCost: calculateTotalCost(updatedOrders),
      vat: calculateVAT(updatedOrders),
      grandTotal: calculateGrandTotal(
        calculateTotalCost(updatedOrders),
        calculateVAT(updatedOrders)
      ),
    };
    setEditedInvoice(updatedInvoice);
  };

  // Function to calculate total cost based on updated orders
  const calculateTotalCost = (orders: any[]) => {
    return orders.reduce((total, order) => total + order.unitTotalPrice, 0);
  };

  // Function to calculate total VAT based on updated orders
  const calculateVAT = (orders: any[]) => {
    return orders.reduce((totalVAT, order) => totalVAT + order.units, 0);
  };

  // Function to calculate grand total based on total cost and VAT
  const calculateGrandTotal = (totalCost: number, vat: number) => {
    return (totalCost += (totalCost * vat) / 100);
  };

  if (!selectedInvoice) {
    return <div>please select invoice</div>;
  }

  // Validate and format the order date
  const orderDate = selectedInvoice.orderDate;
  const parsedDate = isValid(new Date(orderDate)) ? new Date(orderDate) : new Date();
  const formattedOrderDate = format(parsedDate, "EEEE, MMMM dd, yyyy");
  return (
    <div>
      <h2 className="text-xl mb-2">Edit Invoice Details</h2>
      <p>ID: {editedInvoice.id}</p>
      <p>Date: {formattedOrderDate}</p>

      <div className="bg-lightgray dark:bg-gray-800/70 p-6 my-6 rounded-md">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="billFrom">Bill From</Label>
            </div>
            <TextInput
              id="billFrom"
              name="billFrom"
              value={editedInvoice.billFrom}
              onChange={(e) =>
                setEditedInvoice({ ...editedInvoice, billFrom: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="billto">Bill To</Label>
            </div>
            <TextInput
              id="billto"
              name="billto"
              value={editedInvoice.billTo}
              onChange={(e) =>
                setEditedInvoice({ ...editedInvoice, billTo: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="status">Status</Label>
            </div>
            <Select
              className="select-md"
              value={editedInvoice.status}
              onChange={(e) =>
                setEditedInvoice({ ...editedInvoice, status: e.target.value })
              }
            >
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="Shipped">Shipped</option>
            </Select>
          </div>
          <div className=" md:col-span-6 col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="fromadd">From Address</Label>
            </div>
            <TextInput
              id="fromadd"
              name="fromadd"
              value={editedInvoice.billFromAddress}
              onChange={(e) =>
                setEditedInvoice({
                  ...editedInvoice,
                  billFromAddress: e.target.value,
                })
              }
              className="form-control"
            />
          </div>
          <div className=" md:col-span-6 col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="billtoadd">Bill To Address</Label>
            </div>
            <TextInput
              id="billtoadd"
              name="billtoadd"
              value={editedInvoice.billToAddress}
              onChange={(e) =>
                setEditedInvoice({
                  ...editedInvoice,
                  billToAddress: e.target.value,
                })
              }
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell>Item Name</TableHeadCell>
            <TableHeadCell>Unit Price</TableHeadCell>
            <TableHeadCell>Units</TableHeadCell>
            <TableHeadCell>Total Cost</TableHeadCell>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y divide-border dark:divide-darkborder ">
            {editedInvoice.orders.map(
              (
                order: { itemName: string | number | readonly string[] | undefined; unitPrice: string | number | readonly string[] | undefined; units: string | number | readonly string[] | undefined; unitTotalPrice: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; },
                index: React.Key | null | undefined
              ) => (
                <TableRow key={index} className="">
                  <TableCell className="whitespace-nowrap">
                    <Tooltip content="Add Item" placement="bottom">
                      <Button
                        className="p-0 mb-2 bg-lightprimary text-primary h-8 w-8 rounded-full flex justify-center items-center  hover:bg-primary hover:text-white"
                        onClick={handleAddItem}
                      >
                        <Icon icon="mdi:plus-circle" height={18} />
                      </Button>

                    </Tooltip>
                  </TableCell>
                  <TableCell className="whitespace-nowrap min-w-44">
                    <TextInput
                      type="text"
                      value={order.itemName}
                      onChange={(e) =>
                        handleOrderChange(index, "itemName", e.target.value)
                      }
                      className="form-control"
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap min-w-44">
                    <TextInput
                      type="number"
                      value={order.unitPrice}
                      onChange={(e) =>
                        handleOrderChange(
                          index,
                          "unitPrice",
                          parseFloat(e.target.value)
                        )
                      }
                      className="form-control"
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap min-w-44">
                    <TextInput
                      type="number"
                      value={order.units}
                      onChange={(e) =>
                        handleOrderChange(
                          index,
                          "units",
                          parseInt(e.target.value)
                        )
                      }
                      className="form-control"
                    />
                  </TableCell>

                  <TableCell className="whitespace-nowrap min-w-32">
                    {order.unitTotalPrice}
                  </TableCell>
                  <TableCell className="whitespace-nowrap"> </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Tooltip content="Delete Invoice" placement="bottom">
                      <Button
                        color={"lighterror"}
                        className="btn-circle p-0 mb-2"
                        onClick={() => handleDeleteItem(index)}
                      >
                        <Icon
                          icon="solar:trash-bin-minimalistic-outline"
                          height={18}
                        />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      <div className="border-t border-ld  py-5 px-4 ">
        <div className="flex justify-end mb-3">
          <div className="flex gap-3 lg:w-1/5">
            <h2 className="max-w-52 w-full opacity-80">Sub Total:</h2>
            <h3 className="ms-auto text-base">{editedInvoice.totalCost}</h3>
          </div>
        </div>
        <div className="flex justify-end mb-3">
          <div className="flex gap-3 lg:w-1/5">
            <h2 className="max-w-52 w-full opacity-80">Vat:</h2>
            <h3 className="ms-auto text-base">{editedInvoice.vat}</h3>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-3 lg:w-1/5">
            <h2 className="max-w-52 w-full opacity-80">Grand Total:</h2>
            <h3 className="ms-auto text-base">{editedInvoice.grandTotal}</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-2">
        {editing ? (
          <div className="flex justify-end gap-3">
            <Button color={"success"} onClick={handleSave}>
              Save
            </Button>
            <Button color={"error"} onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button color={"info"} onClick={() => setEditing(true)}>
            Edit Invoice
          </Button>
        )}
      </div>
      {showAlert && (
        <Alert color="warning" rounded className="fixed top-3 ">
          Invoice data updated successfully.
        </Alert>
      )}
    </div>
  );
};
export default EditInvoicePage;
