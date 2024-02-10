import CardTravel from "../widget/CardTravel";

const items = [
  {
    title: "Lorem",
    content: "Lorem ipsum",
    image: "/image/423455004_932589144932857_4815402058425901436_n.jpg",
  },
  {
    title: "Lorem",
    content: "Lorem ipsum",
    image: "/image/423455004_932589144932857_4815402058425901436_n.jpg",
  },
  {
    title: "Lorem",
    content: "Lorem ipsum",
    image: "/image/423455004_932589144932857_4815402058425901436_n.jpg",
  },
  {
    title: "Lorem",
    content: "Lorem ipsum",
    image: "/image/423455004_932589144932857_4815402058425901436_n.jpg",
  },
];
const TravelList= () => {
  return (
    <>
      <div className="flex flex-col space-y-[16px] items-center justify-center">
        <span className="text-[24px] font-extrabold">Lorem ipsum</span>
        <div className="grid grid-cols-4 gap-4 w-full">
          <CardTravel items={items} />
        </div>
      </div>
    </>
  );
};
export default TravelList;
