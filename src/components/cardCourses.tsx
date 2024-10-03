import { Clock } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Wallet } from "lucide-react";

export function CardCourses() {
  return (
    <div className="flex gap-12 lg:flex-row flex-col">
      <div className="bg-sky-900 rounded-lg flex flex-col items-center justify-center lg:w-[320px] p-8 text-center text-slate-50 gap-4">
        <CalendarDays size={48} />
        <h1 className="font-semibold text-xl">Ínicio</h1>
        <h2>Março de 2025</h2>
        <p className="font-light text-sm">
          Duração de 26 módulos <br className="hidden lg:flex" />{" "}
          <br className="hidden lg:flex" />
          <span className="hidden lg:flex">
            Aulas: terças as sextas, das 8:00 às 12:00 e 14:00 às 18:00
          </span>
        </p>
      </div>

      <div className="bg-sky-900 rounded-lg flex flex-col items-center lg:w-[320px] p-8 text-center text-slate-50 gap-4">
        <Clock size={48} />
        <h1 className="font-semibold text-xl">Carga horária</h1>
        <h2>1000h/a</h2>
        <p className="font-light text-sm">
          26 Módulos mensais Curso de Especialização
        </p>
      </div>

      <div className="bg-sky-900 rounded-lg flex flex-col items-center lg:w-[320px] p-8 text-center text-slate-50 gap-4">
        <Wallet size={48} />
        <h1 className="font-semibold text-xl">Investimento</h1>
        <h2>
          26 x R$ 1600,00 <br /> + <br />
          Taxa Inscrição R$ 50,00
        </h2>
      </div>
    </div>
  );
}
