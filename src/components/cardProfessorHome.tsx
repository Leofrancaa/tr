import Image from "next/image";

export function CardProfessorHome() {
  return (
    <div className="card w-full lg:h-96 bg-base-100 shadow-xl image-full mb-24 z-1 rounded-lg">
      <figure>
        <Image
          src="/assets/img/ai-generated-8223597_1280.jpg"
          width={1200}
          height={200}
          alt="Shoes"
        />
      </figure>
      <div className="card-body rounded-lg">
        <h2 className="card-title text-slate-50">Professores</h2>
        <p className="text-slate-50">
          Quer conhecer nosso corpo docente? clique aqui e saiba mais!
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-sky-600 border-0 hover:bg-orange-600 duration-300 ease-in">
            Saiba Mais!
          </button>
        </div>
      </div>
    </div>
  );
}
