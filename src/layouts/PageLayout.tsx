import { PropsWithChildren } from "react";

import Logo from "../assets/logo";
import Footer from "./Footer";

function PageLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <div className="px-[50px] md:px-[120px] mb-[96px]">
        <header className="py-[26px]">
          <Logo />
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
