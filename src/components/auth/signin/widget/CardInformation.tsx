import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import UploadAvatar from "../components/uploadAvatar";

const CardInformation = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Card className="flex justify-center items-center flex-col border-0 shadow-lg">
        <CardHeader>
          <CardTitle>
            <UploadAvatar />
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">{children}</CardContent>
      </Card>
    </>
  );
};
export default CardInformation;
