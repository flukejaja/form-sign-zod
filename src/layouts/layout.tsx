import NavbarComponents from "@/layouts/navbar";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col  ">
        <NavbarComponents />
        <div className="container mx-auto ">{children}</div>
      </div>
    </>
  );
};
export default LayoutComponent;
