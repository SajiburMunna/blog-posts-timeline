import { PropsWithChildren } from "react";

function Card({ children }: PropsWithChildren<unknown> = { children: "Card" }) {
  return (
    <div className="card border border-[#466E8799] rounded-2xl p-4">
      {children}
    </div>
  );
}

export default Card;
