import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="h-[635px] flex flex-row justify-center  items-center ">
        <div className="h-[635px] w-full absolute">
          <Image
            src={"/image/423455004_932589144932857_4815402058425901436_n.jpg"}
            alt="bannerHeadline"
            fill
            className="object-cover "
          />
        </div>
        <span className="flex z-10 flex-col">
          <span className="text-[24px] font-extrabold text-white drop-shadow-sm">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <span className="text-[16px] font-bold text-white">
            One-stop Platform comunity for Agents and Operator in Thailand
          </span>
        </span>
      </div>
    </>
  );
};
export default Banner;
