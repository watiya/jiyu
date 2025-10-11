
import React from "react";
import BreadcrumbComp from "./layout/shared/breadcrumb/BreadcrumbComp";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Accordion",
  },
];


const page = () => {
  return (
    <>
      <BreadcrumbComp title="Sample Page" items={BCrumb} />

    </>
  );
};

export default page;
