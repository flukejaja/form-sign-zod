import { ChangeEvent, useState } from "react";
import Avatar from "../widget/Avatar";
import useCustomerStore from "@/stores/customer";
const UploadAvatar = () => {
  const { handleSetValue, ImageFile } = useCustomerStore((state) => ({
    ...state,
  }));
  const handleUploadfile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!!files) {
      handleSetValue("ImageName", files[0].name);
      handleSetValue("ImageFile", files[0]);
    }
  };
  return (
    <>
      <Avatar ImageFile={ImageFile}>
        <input
          type="file"
          className=" absolute w-full h-full bg-black  opacity-0"
          onChange={(e) => handleUploadfile(e)}
        />
      </Avatar>
    </>
  );
};
export default UploadAvatar;
