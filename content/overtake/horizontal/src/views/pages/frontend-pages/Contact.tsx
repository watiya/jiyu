import ContactForm from "src/components/front-pages/contactus/ContactForm";
import ContactMap from "src/components/front-pages/contactus/ContactMap";
import PurchaseTemp from "src/components/front-pages/homepage/PurchaseTemp";
import FrontEndBreadcrumb from "src/layouts/full/shared/breadcrumb/FrontBreadcrumb";


const Contact = () => {
    return (
        <>
        <div className="bg-lightgray dark:bg-darkgray">
          <FrontEndBreadcrumb
            title="We’d love to hear from you"
            link="Contact Us"
          />
          <div className="lg:pb-24 pb-12">
            <ContactMap />
            <ContactForm />
          </div>
          <PurchaseTemp />
        </div>
      </>
    );
};

export default Contact;
