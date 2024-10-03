import Image from "next/image";

export function Logo() {
  return (
    <div className="flex gap-4 items-center lg:w-[180px] lg:h-[65px]">
      <Image src={"/assets/img/Brand.svg"} alt={""} width={40} height={40} />
      <h1 className="lg:text-2xl text-slate-50">Ícone Pós</h1>
    </div>
  );
}
