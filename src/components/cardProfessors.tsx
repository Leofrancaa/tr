import Image from "next/image";
import { tv } from "tailwind-variants";

const cardProfessors = tv({
  base: "flex gap-4 rounded-md mb-20 -skew-y-6 shadow-2xl",
  variants: {
    color: {
      primary: "bg-slate-200",
      secondary: "bg-sky-900",
    },
    textColor: {
      primary: "text-sky-900",
      secondary: "text-slate-200",
    },
  },

  defaultVariants: {
    color: "primary",
    textColor: "primary",
  },
});

interface CardProfessorsProps {
  name: string;
  text?: string;
  img: string;
  className?: string;
  color?: "primary" | "secondary";
  textColor?: "primary" | "secondary";
}

export function CardProfessors({
  name,
  text,
  img,
  color,
  textColor,
}: CardProfessorsProps) {
  return (
    <div className={cardProfessors({ color })}>
      <div className="shadow-2xl border-b-[6px] border-orange-600">
        <Image src={img} alt={""} width={400} height={100} />
      </div>
      <div className="flex flex-col gap-4 p-4 skew-y-6">
        <h1
          className={`${cardProfessors({
            textColor,
            color,
          })} text-3xl font-bold shadow-none mb-0`}
        >
          {name}
        </h1>
      </div>
    </div>
  );
}
