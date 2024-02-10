import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarCustomer({
  ImageFile,
  name,
}: {
  ImageFile?: File;
  name: string;
}) {
  return (
    !!ImageFile && (
      <>
        <Avatar>
          <AvatarImage
            src={URL.createObjectURL(ImageFile)}
            alt="avatarCustomer"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </>
    )
  );
}
