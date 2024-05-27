import { PropsWithChildren } from "react";

import Logo from "../assets/logo";

function PageLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="px-[120px]">
      <header className="py-[26px]">
        <Logo />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
