import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
interface itemsType {
  title: string;
  content: string;
  image: string;
}
const CardTravelComponent = ({ items }: { items: itemsType[] }) => {
  return (
    <>
      {!!items && (
        <>
          {items.map((item, idx) => {
            return (
              <Card key={idx} className="w-full  drop-shadow-lg space-y-2">
                <CardContent className=" p-0  rounded-t-lg overflow-hidden">
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-[240px] relative w-full">
                      <Image src={item.image} alt={"image" + idx} fill />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <span className="font-extrabold">{item.title}</span>
                  <span>{item.content}</span>
                  <Button>Buy package</Button>
                </CardFooter>
              </Card>
            );
          })}
        </>
      )}
    </>
  );
};
export default CardTravelComponent;
