import Logo from "../assets/logo";
import { Button } from "../components/Button";

function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-8">
      <a href="/" className="text-2xl font-bold">
        <Logo />
      </a>
      <div className="flex items-center gap-14">
        <ul className="flex items-center gap-8">
          <li>
            <a
              className="font-medium text-base leading-5 text-[#25D366]"
              href="/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="font-medium text-base leading-5 hover:text-[#25D366]"
              href="https://dev-sojib.vercel.app/"
              target="_blank"
            >
              About
            </a>
          </li>
        </ul>
        <a href="mailto:info.sojibhossen.me@gmail.com" target="_blank">
          <Button
            variant="outlined"
            className="!rounded-full !border-[#25D366] hover:bg-[#25D366] !font-semibold"
          >
            Let's Talk
          </Button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
