import { tv } from "tailwind-variants";

const titleh1 = tv({
  base: "text-md border-l-8 pl-2 pb-0 lg:text-3xl font-semibold mb-4 lg:mb-6",
  variants: {
    color: {
      primary: "text-sky-900",
      secondary: "text-slate-200",
    },
    border: {
      primary: "border-sky-900",
      secondary: "border-slate-200",
    },
  },

  defaultVariants: {
    color: "primary",
    border: "primary",
  },
});

interface TitleProps {
  title: string;
  className?: string;
  color?: "primary" | "secondary";
  border?: "primary" | "secondary";
}

export function Title({ title, className, color, border }: TitleProps) {
  return <h1 className={titleh1({ color, className, border })}>{title}</h1>;
}
