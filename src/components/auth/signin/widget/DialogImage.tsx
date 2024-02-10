import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
const DialogImage = ({
  open,
  setOpen,
  ImageFile,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  ImageFile?: File;
}) => {
  return (
    !!ImageFile && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription className="flex justify-center items-center">
              <div className="relative h-[224px] w-[224px] ">
                <Image
                  src={URL.createObjectURL(ImageFile)}
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  );
};
export default DialogImage;
