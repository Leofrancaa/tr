import { CardProfessors } from "@/components/cardProfessors";
import Gustavo from "../../../public/assets/img/Gustavo Bastos.svg";
import Marcio from "../../../public/assets/img/Márcio Machionni.svg";
import Sandro from "../../../public/assets/img/Sandro Bittencourt.svg";
import Lucindo from "../../../public/assets/img/Lucindo Sobrinho.svg";
import Marcelo from "../../../public/assets/img/Marcelo Machado.svg";
import Mariana from "../../../public/assets/img/Mariana Basilio.svg";
import MarceloC from "../../../public/assets/img/Marcelo Carvalho.svg";
import { Title } from "@/components/title";

export default function corpoDocente() {
  return (
    <div className="py-36">
      <div className="px-12 mb-28">
        <Title title={"Corpo Docente"}></Title>
        <p className="text-xl text-slate-800">
          Convocamos um corpo docente referência em Implantodontia na
          Bahia.Nossa equipe está empenhada em promover uma experiência única de
          aprendizado. <span className="text-sky-600 font-bold">Confira!</span>
        </p>
      </div>

      <section className="bg-sky-900 px-12 py-24 skew-y-6 mb-40">
        <Title
          title={"Professores Coordenadores"}
          color="secondary"
          border="secondary"
          className="-skew-y-6 mb-12"
        />
        <CardProfessors
          img={Gustavo}
          name={"Luiz Gustavo Bastos"}
          text={`Especialista em Prótese Dentária - CFO
          Pós Graduado em Periodontia
          Mestre e Doutor em Reabilitaçao Oral - FOBauru - USP
          Professor Adjunto do Curso de Odontologia da UFBA
          `}
        />
        <CardProfessors
          img={Marcio}
          name={"Márcio Machionni"}
          text={`
          Mestre e Especialista em Cirurgia e Traumatologia Buco Maxilo Facial (CTBMF) pela Pontifícia Universidade Católica do Rio Grande do Sul (2002)
          Doutor em Laser na Odontologia pela Universidade Federal da Bahia (2008)
          Especialista em Prótese Dentária pela FBB (2015)
          Especialista em Implantodontia pela FBB (2018)
          Preceptor da Residência em CTBMF pela Secretaria de Saúde do Estado da Bahia/EBMSP desde 2004`}
        />
        <CardProfessors
          img={Sandro}
          name={"Sandro Bittencourt"}
          text={`Especialista em periodontia ABO-BA
          Mestre e Doutor em periodontia - FOP-Unicamp
          Professor adjunto do curso de odontologia - BAHIANA
          Coordenador do grupo de plástica peri-implantar
          Coordenador da especializaçao em implantodontia - Ícon Pós Graduaçao`}
        />
      </section>

      <section className="skew-y-6 px-12">
        <Title title={"Professores"} className="-skew-y-6 mb-12" />
        <CardProfessors
          img={MarceloC}
          name={"Marcelo Carvalho"}
          text={`especialização em Protese Dentária pela Faculdade Bahiana para Desenvolvimento das Ciencias (2009), 
          especialização em Implantodontia pela Associação Brasileira de Odontologia - Seção Bahia`}
          color={"secondary"}
          textColor={"secondary"}
        />

        <CardProfessors
          img={Mariana}
          name={"Mariana Basílio"}
          text={` Mestre em Reabilitação Oral pela Faculdade de Odontologia de Araraquara da Universidade Estadual Paulista (FOAr-UNESP) (2011). 
          Doutora em Reabilitação Oral pela FOAr - UNESP (2015). 
          Doutorado Sanduíche na Schulich School of Medicine & Dentistry - Western University, Canada (2014).
          Professora Adjunta do curso de Odontologia da FO-UFBA (2017-atual).`}
          color={"secondary"}
          textColor={"secondary"}
        />
        <CardProfessors
          img={Marcelo}
          name={"Marcelo Machado"}
          text={`Especialista em Prótese Dentária - FUNBEO Bauru
          `}
          color={"secondary"}
          textColor={"secondary"}
        />
      </section>
    </div>
  );
}
