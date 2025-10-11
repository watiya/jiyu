import  { useContext } from "react";
import { Icon } from "@iconify/react";
import { HR,} from "flowbite-react";
import EmailCompose from "./EmailCompose";
import { EmailContext } from "src/context/EmailContext";



interface fitlerType {
  id?: number;
  filterbyTitle?: string;
  icon?: any;
  name?: string;
  divider?: boolean;
  color?: string;
}
const EmailFilter = () => {
  const filterData: fitlerType[] = [
    {
      id: 2,
      name: "inbox",
      icon: 'solar:inbox-line-broken',
    },
    {
      id: 3,
      name: "sent",
      icon: 'solar:plain-2-linear',
    },
    {
      id: 4,
      name: "draft",
      icon: 'solar:notes-linear',
    },
    {
      id: 14,
      name: "spam",
      icon: 'solar:flag-2-outline',
    },
    {
      id: 5,
      name: "trash",
      icon: 'solar:trash-bin-trash-outline',
    },
    {
      id: 6,
      divider: true,
    },
    {
      id: 1,
      filterbyTitle: "Sort By",
    },
    {
      id: 7,
      name: "starred",
      icon: 'solar:star-fall-minimalistic-2-line-duotone',
    },
    {
      id: 8,
      name: "important",
      icon: 'solar:bell-bing-linear',
    },
    {
      id: 9,
      divider: true,
    },
    {
      id: 13,
      filterbyTitle: "Labels",
    },
    {
      id: 10,
      name: "Promotional",
      icon: 'solar:folder-open-linear',
      color: "primary",
    },
    {
      id: 11,
      name: "Social",
      icon: 'solar:folder-open-linear',
      color: "error",
    },
    {
      id: 12,
      name: "Health",
      icon: 'solar:folder-open-linear',
      color: "success",
    },
  ];


  const { setFilter, filter } = useContext(EmailContext);

  const handleFilterClick = (filterName: string | any) => {
    setFilter(filterName);
  };

  return (
    <>
      <div className="left-part max-w-[235px] h-full w-full ">
        <EmailCompose />
        <ul className="my-4">
          {filterData.map((item) => {
            if (item.filterbyTitle) {
              return (
                <h6 className="uppercase text-xs pb-3" key={item.id}>
                  {item.filterbyTitle}
                </h6>
              );
            } else if (item.divider) {
              return (
                <div className="my-4" key={item.id}>
                  <HR  className="my-6" />
                </div>
              );
            }
            return (
              <li
                key={item.id}
                className={`py-[10px] first:mt-0 mt-1 flex items-center gap-2 px-4 hover:bg-muted dark:hover:bg-darkmuted rounded-md text-ld cursor-pointer capitalize  ${filter === item.name ? "text-primary bg-lighthover dark:bg-darkmuted" : ""}`}
                onClick={() => handleFilterClick(item.name)}
              >
                <Icon icon={item.icon} height={18} className={`text-${item.color}`} />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div >
    </>
  );
};

export default EmailFilter;
