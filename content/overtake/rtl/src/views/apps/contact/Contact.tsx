
import ContactApp from "src/components/apps/contacts";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


export const Contact = () => {
    const BCrumb = [
        {
          to: "/",
          title: "Home",
        },
        {
          title: "Contact",
        },
      ];
    return (
        <>
              <BreadcrumbComp title="Contact App" items={BCrumb} />
              <ContactApp />
        </>
    )
}

export default Contact