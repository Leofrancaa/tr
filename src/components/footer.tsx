import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Youtube } from "lucide-react";
import { Home } from "lucide-react";
import { BookCopy } from "lucide-react";
import { Users2 } from "lucide-react";
import { UserSquare2 } from "lucide-react";
import { MapPin } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-sky-900 text-slate-50 pb-20 p-10 lg:gap-10 lg:px-20 lg:py-8 flex flex-wrap gap-4 lg:justify-between flex-col">
      <div>
        <Logo />

        <div className="bg-slate-50 w-full h-[2px]"></div>
      </div>

      <section className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="border-b-2 border-dashed border-orange-600">
            CONTATO
          </h2>
          <div className="flex items-center gap-2 cursor-pointer">
            <Mail />
            <a
              href="gmail.com"
              className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600"
            >
              contato@iconepos.com.br
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Phone />
            <a className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              (71) 99999-9999
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="border-b-2 border-dashed border-orange-600">
            SIGA A ÍCONE
          </h2>
          <div className="flex items-center gap-2 cursor-pointer">
            <Instagram />
            <a className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              @iconepos
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Youtube />
            <a className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              Ícone Pós
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="border-b-2 border-dashed border-orange-600">
            ENDEREÇO
          </h2>
          <div className="flex gap-2 cursor-pointer">
            <MapPin />
            <a className="underline text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              Complexo Odontomédico Itaigara <br /> Av. Antônio Carlos
              Magalhães, n. 585, <br /> 3º andar, Edf. Pierre Fauchard Itaigara,
              <br />
              Salvador-BA
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="border-b-2 border-dashed border-orange-600">MENU</h2>
          <div className="flex items-center gap-2 cursor-pointer">
            <Home />
            <a className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              Home
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <BookCopy />
            <a
              href="/cursos"
              className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600"
            >
              Cursos
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Users2 />
            <a className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              Corpo Docente
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <UserSquare2 />
            <a className="text-sm hover:underline underline-offset-1 transition duration-300 hover:text-orange-600">
              Central do Paciente
            </a>
          </div>
        </div>
      </section>

      <div>
        <span></span>
      </div>
    </footer>
  );
}
