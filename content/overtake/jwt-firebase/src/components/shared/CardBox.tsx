


import { CustomizerContext } from "src/context/CustomizerContext";
import { Card } from "flowbite-react";
import  { useContext } from "react";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  const { isCardShadow, isBorderRadius } = useContext(CustomizerContext);
  return (
    <Card className={`card p-[30px]  ${className} ${isCardShadow ? ' shadow-md dark:shadow-none !border-none' : 'shadow-none border border-ld'} `}
      style={{
        borderRadius: `${isBorderRadius}px`,
      }}
    >{children}</Card>
  );

};
export default CardBox;
