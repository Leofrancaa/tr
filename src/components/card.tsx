import Image from "next/image";

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps) {
  return (
    <div className=" card card-compact lg:w-[550px] lg:h-96 w-fit bg-sky-900 shadow-xl mb-16 rounded-lg">
      <figure>
        <Image
          src="/assets/img/ai-generated-8223597_1280.jpg"
          width={384}
          height={100}
          layout="responsive"
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex-row justify-between">
        <h2 className="card-title text-slate-50 text-base lg:text-xl">
          {title}
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-sky-600 border-0 hover:bg-orange-600 duration-300 ease-in">
            Saiba Mais!
          </button>
        </div>
      </div>
    </div>
  );
}
