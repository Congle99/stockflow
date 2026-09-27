import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",
  secondary:
    "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
  ghost:
    "text-gray-600 hover:bg-gray-100",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-lg px-4 py-2
        text-sm font-medium
        transition-colors
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}