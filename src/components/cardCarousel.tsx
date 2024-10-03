import { CalendarDays } from "lucide-react";
import { SubscribeBtt } from "@/components/subscribeBtt";
interface CardCarouselProps {
  title: string;
}

export function CardCarousel({ title }: CardCarouselProps) {
  return (
    <div className="w-[180px] lg:w-[360px] shadow-md text-sky-600 gap-1 lg:gap-4 bg-slate-50 p-2 lg:p-4 rounded-xl absolute lg:top-24 top-20 left-4 lg:left-40 flex justify-center flex-col">
      <div className="flex gap-4 items-center">
        <CalendarDays className="lg:w-10 lg:h-10" color="#0284C7" />
        <span className="lg:text-xl text-sm">
          Início do Curso: <br /> 25/03/2023
        </span>
      </div>

      <h1 className="font-semibold text-sm w-[160px] lg:w-fit lg:text-2xl">
        {title}
      </h1>
      <span className="hidden lg:flex">
        Sandro Bittencourt | Márcio Marchionni | <br /> Marcelo Machado
      </span>
      <SubscribeBtt />
    </div>
  );
}
