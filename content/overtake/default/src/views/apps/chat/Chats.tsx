import ChatsApp from "src/components/apps/chat";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";




const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chat",
  },
];
const Chats = () => {
  return (
    <>
      <BreadcrumbComp title="Chat App" items={BCrumb} />
      <ChatsApp />
    </>
  );
};

export default Chats;
