import { Modal } from "@/components/modal";
import { Accordion } from "@/components/accordion";
import { Title } from "@/components/title";
import Protese1 from "../../../public/assets/img/protese1.svg";
import Protese2 from "../../../public/assets/img/protese2.svg";

export default function centralDoPaciente() {
  return (
    <div className="lg:py-36 py-20">
      <div className="mb-20 lg:mb-32 lg:px-16 px-4">
        <Title
          title={
            "Descubra a Liberdade dos Sorrisos com Próteses sobre Implantes: Um Guia para uma Nova Dimensão de Conforto e Estabilidade"
          }
        ></Title>
        <p className="text-slate-800 text-justify text-sm">
          É com grande entusiasmo que apresentamos este guia informativo sobre
          as próteses sobre implantes, uma solução moderna e inovadora para
          restaurar a função mastigatória e a estética do seu sorriso. Sabemos
          que a decisão de escolher próteses sobre implantes é crucial, e
          estamos aqui para fornecer informações abrangentes que o ajudarão a
          aproveitar ao máximo essa jornada de transformação. A seguir,
          destacamos alguns pontos importantes sobre as próteses sobre implantes
          e dicas para uma manutenção eficaz:
        </p>
      </div>

      <div className="bg-sky-800 skew-y-6 px-20 pb-20 pt-16 lg:pb-36 lg:pt-24">
        <div className="-skew-y-6 flex flex-col gap-12 lg:flex-row justify-between flex-wrap">
          <div>
            <Title
              color="secondary"
              border="secondary"
              title={"Protese 1"}
            ></Title>
            <Modal img={Protese1}></Modal>
          </div>
          <div>
            <Title
              color="secondary"
              border="secondary"
              title={"Protese 2"}
            ></Title>
            <Modal img={Protese2}></Modal>
          </div>
          <div>
            <Title
              color="secondary"
              border="secondary"
              title={"Protese 3"}
            ></Title>
            <Modal img={Protese1}></Modal>
          </div>

          <div>
            <Title
              color="secondary"
              border="secondary"
              title={"Cuidados e manutenções"}
            ></Title>

            <Accordion></Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
