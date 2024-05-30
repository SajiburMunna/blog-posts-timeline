import { PropsWithChildren } from "react";

import Facebook from "../assets/facebook";
import Github from "../assets/github";
import Logo from "../assets/logo";
import Twitter from "../assets/twitter";

const SocialLinkData = [
  {
    id: 1,
    href: "http://github.com/sajiburmunna",
    icon: Github,
  },
  {
    id: 2,
    href: "https://www.facebook.com/profile.php?id=100006695027759",
    icon: Facebook,
  },
  {
    id: 3,
    href: "https://x.com/SajiburM",
    icon: Twitter,
  },
];

function Footer() {
  return (
    <footer className="py-[26px] bg-[#111B21] border-t-[1.5px] border-[#FFFFFF1A]">
      <div className="max-w-[1440px] m-auto px-[50px] md:px-[120px]">
        <div className="flex justify-between gap-3 items-center">
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-base leading-5">JSojibcript.BD</p>
          </div>
          <div>
            <div className="flex gap-2">
              {SocialLinkData.map(({ href, icon: Icon, id }) => (
                <SocialLink key={id} href={href}>
                  <Icon />
                </SocialLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const SocialLink = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
