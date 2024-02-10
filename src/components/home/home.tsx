import BannerComponent from "./components/Banner";
import TravelListComponent from "./components/TravelList";

const HomeComponent = () => {
  return (
    <>
      <div className="flex flex-col space-y-[16px]">
        <BannerComponent />
        <div className="container mx-auto py-[64px]">
          <TravelListComponent />
        </div>
      </div>
    </>
  );
};
export default HomeComponent;
