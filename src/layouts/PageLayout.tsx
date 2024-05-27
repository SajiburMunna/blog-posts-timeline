import { PropsWithChildren } from "react";

import Logo from "../assets/logo";

function PageLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <header className="py-[26px]">
        <Logo />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
