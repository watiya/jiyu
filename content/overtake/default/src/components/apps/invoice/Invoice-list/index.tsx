
import  { useContext, useState } from "react";
import {
  Checkbox,
  Table,
  TextInput,
  Button,
  Modal,
  Badge,
  Tooltip,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  ModalBody,
  ModalFooter,
} from "flowbite-react";

import { Icon } from "@iconify/react";

import { Link } from "react-router";
import { InvoiceContext } from "src/context/InvoiceContext";

function InvoiceList() {
  const { invoices, deleteInvoice } = useContext(InvoiceContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter(
    (invoice: { billFrom: string; billTo: string; status: string }) => {
      return (
        (invoice.billFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          invoice.billTo.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (activeTab === "All" || invoice.status === activeTab)
      );
    }
  );

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Calculate the counts for different statuses
  const Shipped = invoices.filter((t: { status: string }) => t.status === "Shipped").length;
  const Delivered = invoices.filter((t: { status: string }) => t.status === "Delivered").length;
  const Pending = invoices.filter((t: { status: string }) => t.status === "Pending").length;

  // Toggle all checkboxes
  const toggleSelectAll = () => {
    const selectAllValue = !selectAll;
    setSelectAll(selectAllValue);
    if (selectAllValue) {
      setSelectedProducts(invoices.map((invoice: { id: any }) => invoice.id));
    } else {
      setSelectedProducts([]);
    }
  };

  // Toggle individual product selection
  const toggleSelectProduct = (productId: any) => {
    const index = selectedProducts.indexOf(productId);
    if (index === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter((id: any) => id !== productId));
    }
  };

  // Handle opening delete confirmation dialog
  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  // Handle confirming deletion of selected products
  const handleConfirmDelete = async () => {
    for (const productId of selectedProducts) {
      await deleteInvoice(productId);
    }
    setSelectedProducts([]);
    setSelectAll(false);
    setOpenDeleteDialog(false);
  };

  // Handle closing delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };


  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between overflow-x-auto mb-8 gap-6 ">
        {/* Summary sections */}
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-lg hover:bg-muted dark:hover:bg-darkmuted ${activeTab == "All" ? "bg-muted dark:bg-darkmuted" : null
            }   `}
          onClick={() => handleTabClick("All")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-primary text-primary flex justify-center items-center">
            <Icon icon="solar:tag-horizontal-broken" height={25} />
          </div>
          <div>
            <h5 className="text-base">Total</h5>
            <p className="text-ld opacity-80">{invoices.length} invoices</p>
            <h6 className="text-sm">$46,218.04</h6>
          </div>
        </div>
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-lg hover:bg-muted dark:hover:bg-darkmuted ${activeTab == "Shipped" ? "bg-muted dark:bg-darkmuted" : null
            }`}
          onClick={() => handleTabClick("Shipped")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-success text-success flex justify-center items-center">
            <Icon icon="solar:shield-up-linear" height={25} />
          </div>
          <div>
            <h5 className="text-base">Shipped</h5>
            <p className="text-ld opacity-80">{Shipped} invoices</p>
            <h6 className="text-sm">$23,110.23</h6>
          </div>
        </div>
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2 cursor-pointer p-5 rounded-lg hover:bg-muted dark:hover:bg-darkmuted ${activeTab == "Delivered" ? "bg-muted dark:bg-darkmuted" : null
            }`}
          onClick={() => handleTabClick("Delivered")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-secondary text-secondary flex justify-center items-center">
            <Icon icon="solar:map-point-wave-linear" height={25} />
          </div>
          <div>
            <h5 className="text-base">Delivered</h5>
            <p className="text-ld opacity-80">{Delivered} invoices</p>
            <h6 className="text-sm">$13,825.05</h6>
          </div>
        </div>
        <div
          className={`flex gap-3 items-center sm:w-3/12 w-full mb-2  cursor-pointer p-5 rounded-lg hover:bg-muted dark:hover:bg-darkmuted ${activeTab == "Pending" ? "bg-muted dark:bg-darkmuted" : null
            }`}
          onClick={() => handleTabClick("Pending")}
        >
          <div className="h-14 w-14 rounded-full border-2 border-warning text-warning flex justify-center items-center">
            <Icon icon="solar:camera-rotate-broken" height={25} />
          </div>
          <div>
            <h5 className="text-base">Pending</h5>
            <p className="text-ld opacity-80">{Pending} invoices</p>
            <h6 className="text-sm">$4,655.63</h6>
          </div>
        </div>
      </div>
      <div className="sm:flex justify-between my-6">
        <div>
          <TextInput
            id="dis"
            type="text"
            className="form-control"
            placeholder="search"
            value={searchTerm}
            icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button color={"primary"} className="sm:w-fit w-full sm:mt-0 mt-4">
          <Link to="/apps/invoice/create">New Invoice</Link>
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="!bg-transparent" >
            <TableHeadCell className="p-4">
              <Checkbox
                className="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </TableHeadCell>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>BILL FROM</TableHeadCell>
            <TableHeadCell>BILL TO</TableHeadCell>
            <TableHeadCell>TOTAL COST</TableHeadCell>
            <TableHeadCell>STATUS</TableHeadCell>
            <TableHeadCell className="text-center">ACTION</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y divide-border dark:divide-darkborder">
            {filteredInvoices.map((invoice: {
              id: any;
              billFrom: any;
              billTo: any;
              totalCost: any;
              status: any;
            }) => {
              console.log(decodeURIComponent(invoice.billFrom));
              return (
                <TableRow key={invoice.id}>
                  <TableCell className="p-4">
                    <Checkbox
                      className="checkbox"
                      onChange={() => toggleSelectProduct(invoice.id)}
                      checked={selectedProducts.includes(invoice.id)}
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <h5 className="text-sm">{invoice.id}</h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{invoice.billFrom}</h5>
                  </TableCell>
                  <TableCell className="text-ld">{invoice.billTo}</TableCell>
                  <TableCell className="text-ld">{invoice.totalCost}</TableCell>
                  <TableCell>
                    {invoice.status === "Shipped" ? (
                      <Badge color="success">{invoice.status}</Badge>
                    ) : invoice.status === "Delivered" ? (
                      <Badge color="secondary">{invoice.status}</Badge>
                    ) : invoice.status === "Pending" ? (
                      <Badge color="warning">{invoice.status}</Badge>
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-3">
                      <Tooltip content="Edit Invoice" placement="bottom">
                        <Button className="btn-circle p-0 mb-2 bg-lightsuccess dark:bg-lightsuccess hover:text-white text-success dark:text-success hover:bg-success dark:hover:text-white dark:hover:bg-success">
                          <Link to={`/apps/invoice/edit/${decodeURIComponent(invoice.billFrom)}`}>
                            <Icon icon="solar:pen-outline" height={18} />
                          </Link>
                        </Button>
                      </Tooltip>
                      <Tooltip content="View Invoice" placement="bottom">
                        <Button color={"lightprimary"} className="btn-circle p-0 mb-2 dark:text-primary dark:hover:text-white">
                          <Link to={`/apps/invoice/detail/${decodeURIComponent(invoice.billFrom)}`}>
                            <Icon icon="solar:eye-outline" height={18} />
                          </Link>
                        </Button>
                      </Tooltip>
                      <Tooltip content="Delete Invoice" placement="bottom">
                        <Button
                          color={"lighterror"}
                          className="btn-circle p-0 mb-2 dark:text-error dark:hover:text-white" 
                          onClick={() => {
                            setSelectedProducts([invoice.id]);
                            handleDelete();
                          }}
                        >
                          <Icon icon="solar:trash-bin-minimalistic-outline" height={18} />
                        </Button>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <Modal show={openDeleteDialog} onClose={handleCloseDeleteDialog} size={"md"}>
        <ModalBody>
          <p className="text-center text-lg text-ld">
            Are you sure you want to delete selected products?
          </p>
        </ModalBody>
        <ModalFooter className="mx-auto">
          <Button color="lighterror" onClick={handleCloseDeleteDialog}>
            Cancel
          </Button>
          <Button color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div >
  );
}

export default InvoiceList;


