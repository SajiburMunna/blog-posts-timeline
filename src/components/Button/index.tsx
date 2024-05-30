import clsx from "clsx";
import { MouseEvent, PropsWithChildren } from "react";

interface ButtonProps {
  style?: object;
  size?: string;
  variant?: ButtonVariant;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "reset" | "button" | "submit";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  type = "submit",
  children,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const classNames = clsx(className, `btn btn-${variant} btn-${size}`, {
    "btn-disabled": disabled,
  });

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </button>
  );
};
