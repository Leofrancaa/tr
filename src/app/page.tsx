import { Title } from "@/components/title";
import { Carousel } from "@/components/carousel";
import { Card } from "@/components/card";
import { CardProfessorHome } from "@/components/cardProfessorHome";
import { CardPatient } from "@/components/cardPatient";
import { News } from "@/components/news";

export default function Home() {
  return (
    <main className="w-full">
      <Carousel />
      <section className="lg:px-20 px-4 flex flex-col gap-4">
        <Title title={"Nossos Cursos"} />
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 lg:justify-between">
          <Card title={"Especialização em implantodontia"} />
          <Card title={"Aperfeiçoamento em implantodontia"} />
        </div>

        <Title title={"A escola"} />
        <p className="text-slate-900 text-justify mb-20">
          Com a proposta de inovação na área de educação, a Ícone Pós-graduação
          surge trazendo cursos de especialização e atualização em
          Implantodontia. Com um corpo docente referência em implantodontia na
          Bahia, nossa equipe está empenhada em promover uma experiência única
          de aprendizado! Vamos juntos!
        </p>

        <Title title={"Corpo Docente"} />
        <CardProfessorHome />

        <Title title={"Central do Paciente"} />
        <CardPatient />

        <Title title={"Notícias"} />
        <News />
      </section>
    </main>
  );
}
