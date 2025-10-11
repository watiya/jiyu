import { Icon } from '@iconify/react/dist/iconify.js';
import { IconCode } from '@tabler/icons-react';
import { Tooltip } from 'flowbite-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// @ts-ignore
import Simplebar from "simplebar-react"

import { useContext } from 'react';
import { CustomizerContext } from 'src/context/CustomizerContext';

const CodeDialog = ({ children }: any) => {
  const { isBorderRadius } = useContext(CustomizerContext);

  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div
    className='px-6 py-2 bg-lightgray border-t border-border dark:border-darkborder dark:bg-white/10'
      style={{
        borderBottomLeftRadius: `${isBorderRadius}px`,
        borderBottomRightRadius: `${isBorderRadius}px`,
      }}
    >
      <div
        className={`flex items-center ${
          isOpen ? 'justify-between' : 'justify-end'
        }`}
      >
        <h5
          className={`text-base text-dark font-semibold dark:text-white ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          Sample Code
        </h5>

        <div className="flex items-center gap-2">
          <Tooltip className="whitespace-nowrap" content={`${isOpen ? 'Hide Code' : 'Show Code'}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group hover:bg-lightprimary hover:cursor-pointer p-2 rounded-full"
            >
              <IconCode size={20} className="group-hover:text-primary" />
            </button>
          </Tooltip>
          <Tooltip className="whitespace-nowrap" content={`Copy Code`}>
            <button className='p-2' onClick={handleCopy}>
              {copied ? (
                <Icon icon="charm:tick" width={20} height={20} className="text-primary" />
              ) : (
                <Icon
                  icon="qlementine-icons:copy-16"
                  className="hover:text-primary"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </Tooltip>
        </div>
      </div>

      <div
        className={`code-modal rounded-md rounded-t-none p-0 my-3  overflow-hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
       <Simplebar className="max-h-[400px]" >
        <SyntaxHighlighter language="jsx" style={vscDarkPlus} >
          {children}
        </SyntaxHighlighter>
       </Simplebar>

      </div>
    </div>
  );
};

export default CodeDialog;
