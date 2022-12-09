import { Link } from "react-router-dom";
import { MouseEventHandler, ReactNode } from "react";
import classNames from "../../../utils/shared/ClassesUtils";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  to?: string;
  target?: string;
  disabled?: boolean;
  destructive?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonPrimary({
  className = "",
  type = "button",
  onClick,
  disabled,
  destructive,
  to,
  target,
  children,
}: Props) {
  return (
    <span>
      {(() => {
        if (!to) {
          return (
            <button
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={classNames(
                className,
                "inline-flex items-center space-x-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
                disabled && "cursor-not-allowed opacity-75",
                !destructive && "bg-theme-600",
                destructive && "bg-red-600",
                !disabled &&
                  !destructive &&
                  "hover:bg-theme-700 focus:ring-theme-500",
                !disabled &&
                  destructive &&
                  "hover:bg-red-700 focus:ring-red-500"
              )}
            >
              {children}
            </button>
          );
        } else {
          return (
            <Link
              to={to}
              target={target}
              className={classNames(
                className,
                "inline-flex items-center space-x-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
                disabled && "cursor-not-allowed opacity-75",
                !destructive && "bg-theme-600",
                destructive && "bg-red-600",
                !disabled &&
                  !destructive &&
                  "hover:bg-theme-700 focus:ring-theme-500",
                !disabled &&
                  destructive &&
                  "hover:bg-red-700 focus:ring-red-500"
              )}
            >
              {children}
            </Link>
          );
        }
      })()}
    </span>
  );
}

//USAGE
{
  /* <div className="space-y-2 w-full">
      <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-end sm:justify-center">
        <ButtonPrimary onClick={() => alert("Clicked primary button")}>Primary</ButtonPrimary>
        <ButtonSecondary onClick={() => alert("Clicked secondary button")}>Secondary</ButtonSecondary>
        <ButtonTertiary onClick={() => alert("Clicked tertiary button")}>Tertiary</ButtonTertiary>
        <LoadingButton ref={loadingButton} onClick={() => startLoading()}>
          Loading
        </LoadingButton>
      </div>
      <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-end sm:justify-center">
        <ButtonPrimary disabled={true}>Primary</ButtonPrimary>
        <ButtonSecondary disabled={true}>Secondary</ButtonSecondary>
        <ButtonTertiary disabled={true}>Tertiary</ButtonTertiary>
        <LoadingButton disabled={true}>Loading</LoadingButton>
      </div>
    </div> */
}
