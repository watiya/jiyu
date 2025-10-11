
import { useState } from "react";
import { Drawer } from "flowbite-react";
import CardBox from "src/components/shared/CardBox";
import { EmailContextProvider } from "src/context/EmailContext";
import EmailContent from "./EmailContent";
import EmailFilter from "./EmailFilter";
import EmailList from "./EmailList";
import EmailSearch from "./EmailSearch";




const EmaiilApp = () => {
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const handleCloseEmail = () => setIsOpenEmail(false);
  const [isOpenMail, setIsOpenMail] = useState(false);
  return (
    <>
      <EmailContextProvider>
        <CardBox className="p-0 overflow-hidden">
          <div className="flex">
            {/* ------------------------------------------- */}
            {/* Left Part */}
            {/* ------------------------------------------- */}
            <Drawer
              open={isOpenEmail}
              onClose={handleCloseEmail}
              className="lg:relative lg:translate-none lg:h-auto lg:bg-transparent max-w-[235px] w-full lg:z-0"
            >
              <EmailFilter />
            </Drawer>
            {/* ------------------------------------------- */}
            {/* Middle part */}
            {/* ------------------------------------------- */}
            <div className="left-part lg:max-w-[340px] max-w-full md:border-e md:border-ld border-e-0  w-full px-0 pt-0">
              <EmailSearch onClick={() => setIsOpenEmail(true)} />
              <EmailList openMail={setIsOpenMail} />
            </div>
            {/* ------------------------------------------- */}
            {/* Detail part */}
            {/* ------------------------------------------- */}
            <EmailContent openMailValue={isOpenMail} onCloseMail={() => setIsOpenMail(false)} />
          </div>
        </CardBox>
      </EmailContextProvider>
    </>
  );
};
export default EmaiilApp;
