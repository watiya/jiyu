
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownItem } from "flowbite-react";
import { CustomizerContext } from "src/context/CustomizerContext";

import englishFlag from "/src/assets/images/flag/icon-flag-en.svg"
import chineseFlag from "/src/assets/images/flag/icon-flag-cn.svg"
import frenchFlag from "/src/assets/images/flag/icon-flag-fr.svg"
import southAfricaFlag from "/src/assets/images/flag/icon-flag-sa.svg"

const Languages = [
  {
    flagname: "English (UK)",
    icon: englishFlag,
    value: "en",
  },
  {
    flagname: "中国人 (Chinese)",
    icon: chineseFlag,
    value: "ch",
  },
  {
    flagname: "français (French)",
    icon: frenchFlag,
    value: "fr",
  },

  {
    flagname: "عربي (Arabic)",
    icon: southAfricaFlag,
    value: "ar",
  },
];

export const Language = () => {
  const { i18n } = useTranslation();

  const { isLanguage, setIsLanguage } = useContext(CustomizerContext);
  const currentLang =
    Languages.find((_lang) => _lang.value === isLanguage) || Languages[1];

  useEffect(() => {
    i18n.changeLanguage(isLanguage);
  }, [isLanguage]);
  return (
    <>
      <div className="relative group/menu">
        <Dropdown
          label=""
          className="w-56  rounded-sm dark:bg-dark"
          dismissOnClick={false}
          renderTrigger={() => (
            <span className="h-10 w-10 hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary ">
              <img
                src={currentLang.icon}
                height={40}
                width={35}
                alt="language"
                className="rounded-full h-6 w-6 object-cover cursor-pointer"
              />
            </span>
          )}
        >
          {Languages.map((item, index) => (
            <DropdownItem
              className="flex gap-3 items-center py-3 w-full dark:bg-dark"
              key={index}
              onClick={() => setIsLanguage(item.value)}
            >
              <img
                src={item.icon}
                alt="flag"
                height={24}
                width={24}
                className="rounded-full object-cover h-6 w-6"
              />
              <span>{item.flagname}</span>
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
    </>
  );
};
