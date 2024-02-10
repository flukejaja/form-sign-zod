import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCustomerStore from "@/stores/customer";
import { AvatarCustomer } from "../widget/AvatarCustomer";
import { ReactNode } from "react";

const DropdownCustomer = ({ children }: { children: ReactNode }) => {
  const { email, ImageFile } = useCustomerStore((state) => ({ ...state }));
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit flex justify-center items-center flex-col">
        <DropdownMenuLabel>
          <AvatarCustomer ImageFile={ImageFile} name={email ?? ""} />
        </DropdownMenuLabel>
        <DropdownMenuLabel>{email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuLabel>Logout</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownCustomer;
