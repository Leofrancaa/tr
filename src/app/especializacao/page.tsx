import { CardCourses } from "@/components/cardCourses";
import { Title } from "@/components/title";

export default function Especializacao() {
  return (
    <section className="flex flex-col items-center lg:gap-16 lg:py-28 lg:px-36 py-20 px-6 gap-8">
      <h1 className="underline text-sky-800 lg:text-3xl font-bold ">
        Especialização em Implatodontia
      </h1>
      <p className="text-justify text-slate-900 lg:text-base text-sm">
        O curso de especialização em Implantodontia, oferecido pelo Grupo/Escola
        Ícone Pós-Graduação em Odontologia tem como coordenadores os Profs. Drs.
        Sandro Bittencourt, Márcio Marchionni, e Luiz Bastos. Além de uma equipe
        de professores convidados com vasta experiência em Cirurgia
        Bucomaxilofacial, Implantodontia, Periodontia e Reabilitação Oral, com
        formação e titulação acadêmica nas melhores Universidades do Brasil
        (Unicamp, PUC e USP). <br /> <br /> O nosso programa representa um
        conceito inovador e já testado em outras turmas e cursos, onde o aluno
        tem a oportunidade de executar as cirurgias de implantes e os tratamento
        protéticos, desde os casos unitários até os casos mais complexos,
        incluindo as extensas reabilitações orais, capacitação em venopunção,
        habilitação em PRF e ênfase em cirurgia plástica peri-implantar, em uma
        carga horária extensa de práticas clínicas
      </p>
      <CardCourses />
      <div className="flex lg:gap-[520px] gap-6 flex-col lg:flex-row self-start">
        <div>
          <Title title={"Seleção"}></Title>
          <span className="text-slate-800">
            Análise curricular e entrevista
          </span>
        </div>
        <div>
          <Title title={"Natureza do curso"}></Title>
          <span className="text-slate-800">
            Teórico, laboratorial e clínico
          </span>
        </div>
      </div>

      <div className="flex self-start flex-col w-full">
        <Title title={"Conteúdo do curso"}></Title>
        <div className="bg-sky-800 p-12 rounded-md w-full">
          <ul className="list-disc text-slate-50 leading-10">
            <li>Imaginologia para Implantodontia</li>

            <li>
              Cirurgias Avançadas: Reconstruções ósseas, Distração Osteogênica,
              Biomateriais, PRP, BMP
            </li>

            <li>
              Procedimentos Cirúrgicos em Implantodontia: Primeiro e Segundo
              estágios
            </li>

            <li>Terapêutica Medicamentosa</li>

            <li>Biologia da Osseointegração</li>

            <li>Características dos Sistemas de Implantes e Bioengenharia</li>

            <li>Fundamentos de Prótese Dentária</li>

            <li>
              Enxerto Ósseo Autógeno e Enxerto Ósseo Alógeno (Banco de Osso)
            </li>
          </ul>
        </div>
      </div>

      <button className="bg-sky-600 px-12 lg:px-40 py-6 lg:text-3xl text-xl text-slate-50 rounded-md shadow-xl hover:bg-orange-600 duration-300 ease-in">
        Inscreva-se
      </button>
    </section>
  );
}
