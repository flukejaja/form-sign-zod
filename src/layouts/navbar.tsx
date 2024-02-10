"use client";
import AvatarCustomerLayout from "@/components/avatar/avatar";
import { Button } from "@/components/ui/button";
import useCustomerStore from "@/stores/customer";
import Link from "next/link";
const NavbarComponents = () => {
  const { isLoggin } = useCustomerStore((state) => ({ ...state }));
  return (
    <>
      <div className="h-[80px] flex justify-around bg-white border-b items-center">
        <Link href={"/"}>
          <div className="w-[68px] h-[68px] rounded-full flex items-center justify-center bg-black text-white">
            Logo
          </div>
        </Link>
        <div>
          <Link className="underline" href={"/"}>
            Home
          </Link>
        </div>
        <div>
          {!isLoggin ? (
            <>
              <Link href={"/signin"}>
                <Button className="rounded-full">Sign in</Button>
              </Link>
            </>
          ) : (
            <>
              <AvatarCustomerLayout />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default NavbarComponents;
