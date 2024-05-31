import { PropsWithChildren } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

function PageLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <div className="px-5 md:px-[120px] mb-[96px]">
        <header className="py-[26px]">
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;
