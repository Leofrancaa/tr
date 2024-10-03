"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed z-50 top-0 lg:h-20 left-0 w-full flex items-center justify-between px-8 lg:px-20 py-[10px] lg:py-4 bg-sky-900 border-b-[3px] border-orange-600">
      <Logo></Logo>
      {/* Mobile */}
      <div className="drawer drawer-end lg:hidden w-8">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-4" className="flex justify-end">
          <Menu size={30} color="#ffffff"></Menu>
        </label>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="font-semibold px-6 py-4 w-64 min-h-full bg-sky-700 text-slate-50 text-[18px] flex flex-col gap-6">
            {/* Sidebar content here */}
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <details className="collapse">
                <summary className="">Cursos</summary>
                <div className="collapse-content text-sm">
                  <Link href={"/aperfeicoamento"}>
                    Especialização em implantodontia
                  </Link>
                </div>
                <div className="collapse-content text-sm">
                  <Link href={"/especializacao"}>
                    Aperfeiçoamento em implantodontia
                  </Link>
                </div>
              </details>
            </li>
            <li>
              <Link href={"/corpoDocente"}>Corpo Docente</Link>
            </li>
            <li>
              <Link href={"/centralDoPaciente"}>Central do Paciente</Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="hidden lg:inline-block">
        <ul className="flex gap-8 items-center">
          <li>
            <Link
              className="text-lg leading-none text-zinc-100 outline-none select-none hover:text-orange-600 hover:underline underline-offset-1 transition duration-300"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <label
                tabIndex={0}
                className="cursor-pointer text-lg leading-none text-zinc-100 outline-none select-none hover:text-orange-600 hover:underline underline-offset-1 transition duration-300"
              >
                Cursos
              </label>
              <ul
                tabIndex={0}
                className="gap-2 dropdown-content z-[1] menu p-2 shadow text-slate-800 w-52 bg-white rounded-md"
              >
                <li>
                  <Link
                    href={"/especializacao"}
                    className="hover:text-white hover:bg-orange-600 duration-300 ease-in "
                  >
                    Especialização
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/aperfeicoamento"}
                    className="hover:text-white hover:bg-orange-600 duration-300 ease-in"
                  >
                    Aperfeiçoamento
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              className="text-lg leading-none text-zinc-100 outline-none select-none hover:text-orange-600 hover:underline underline-offset-1 transition duration-300"
              href={"/corpoDocente"}
            >
              Corpo Docente
            </Link>
          </li>
          <li>
            <Link
              className="text-lg leading-none text-zinc-100 outline-none select-none hover:text-orange-600 hover:underline underline-offset-1 transition duration-300"
              href={"/centralDoPaciente"}
            >
              Central do Paciente
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
