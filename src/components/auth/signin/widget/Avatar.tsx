import { Eye, ImagePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import DialogImage from "../widget/DialogImage";
import useCustomerStore from "@/stores/customer";

const Avatar = ({
  ImageFile,
  children,
}: {
  ImageFile?: File;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const { handleSetValue } = useCustomerStore((state) => ({ ...state }));
  return (
    <>
      <div className="h-[84px] w-[84px] border-2 rounded-full  flex justify-center items-center relative overflow-hidden">
        {!!ImageFile ? (
          <>
            <Image
              src={URL.createObjectURL(ImageFile)}
              alt="avatar"
              fill
              className="object-cover"
            />
            <div className="absolute w-full h-full bg-black/10 flex flex-row items-center justify-center space-x-2 opacity-0  hover:opacity-100">
              <a onClick={() => setOpen(true)}>
                <Eye />
              </a>
              <a onClick={() => handleSetValue("ImageFile", undefined)}>
                <Trash2 />
              </a>
            </div>
          </>
        ) : (
          <>
            <ImagePlus />
            {children}
          </>
        )}
      </div>
      <DialogImage ImageFile={ImageFile} open={open} setOpen={setOpen} />
    </>
  );
};
export default Avatar;
