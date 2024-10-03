import Image from "next/image";

export function CardPatient() {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-96 mb-24 rounded-lg">
      <figure>
        <Image
          src="/assets/img/ai-generated-8223597_1280.jpg"
          width={600}
          height={200}
          layout="responsive"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-slate-50">
          Quer saber mais sobre suas próteses?
        </h2>
        <p className="text-slate-50">
          Clique aqui e veja as dicas para manter elas saudáveis da forma
          correta
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
