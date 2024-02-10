import useCustomerStore from "@/stores/customer";
import DropdownCustomer from "./components/DropdownCustomer";
import { AvatarCustomer } from "./widget/AvatarCustomer";
import { useState } from "react";
import { Button } from "../ui/button";

const AvatarCustomerLayout = () => {
  const { ImageFile } = useCustomerStore((state) => ({ ...state }));
  return (
    <>
      <DropdownCustomer>
        <a>
          <AvatarCustomer ImageFile={ImageFile} name="" />
        </a>
      </DropdownCustomer>
    </>
  );
};
export default AvatarCustomerLayout;
