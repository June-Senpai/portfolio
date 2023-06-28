import NavbarMobile from "./NavbarMobile";
import NavbarPC from "./NavbarPC";

export default function Navbar() {
  return (
    <>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden md:block">
        <NavbarPC />
      </div>
    </>
  );
}
