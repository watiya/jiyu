import { Avatar, AvatarFallback, AvatarImage } from "src/components/shadcn-ui/Default-Ui/avatar";

const BasicAvatarCode = () => {
  return (
    <>
    <div className="flex flex-wrap items-center gap-3 mt-4">
                <Avatar>
                    <AvatarImage src="/src/assets/images/profile/user-3.jpg" alt="user" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> 
                <Avatar>
                    <AvatarImage src="/src/assets/images/profile/user-2.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> 
                <Avatar>
                    <AvatarImage src="/src/assets/images/profile/user-4.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="/src/assets/images/profile/user-5.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="/src/assets/images/profile/user-6.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
    </>
  )
}

export default BasicAvatarCode