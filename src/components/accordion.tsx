export function Accordion() {
  return (
    <div className="text-slate-900">
      <div className="collapse collapse-arrow bg-slate-50 rounded-none rounded-t-md w-full border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium rounded-none">
          Higiene Bucal Rigorosa:
        </div>
        <div className=" collapse-content px-12">
          <ul className="list-disc">
            <li>
              Escove os dentes e as próteses sobre implantes após cada refeição,
              utilizando uma escova de cerdas macias.
            </li>
            <li>
              Use fio dental ou escovas interdentais para limpar áreas de
              difícil acesso entre os implantes.
            </li>
            <li>
              Utilize enxaguante bucal recomendado pelo seu dentista para
              garantir uma higiene completa.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Consultas Regulares ao Dentista:
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              Agende consultas periódicas com seu dentista para avaliações
              profissionais e limpezas.
            </li>
            <li>
              O profissional pode realizar ajustes necessários e identificar
              problemas precocemente.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Evite Alimentos Duros e Pegajosos:
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              Evite morder alimentos muito duros ou pegajosos, pois isso pode
              danificar as próteses ou os implantes.
            </li>
            <li>
              Opte por uma dieta equilibrada e evite hábitos prejudiciais, como
              roer objetos duros.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Proteção Durante Atividades Esportivas:
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              Em atividades esportivas ou de risco, considere o uso de
              protetores bucais para evitar impactos diretos nos implantes e nas
              próteses.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Evite Tabagismo e Consumo Excessivo de Álcool:
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              O tabagismo e o consumo excessivo de álcool podem afetar
              negativamente a saúde dos implantes. Evite esses hábitos para
              promover uma cicatrização adequada e a longevidade dos implantes.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Armazenamento Adequado Durante a Noite
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              Se suas próteses são removíveis, remova-as durante a noite para
              permitir que a gengiva descanse. Armazene-as em um recipiente com
              água ou na solução recomendada pelo seu dentista
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none border-b-2 border-orange-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Comunique-se com o Dentista:
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              Se sentir qualquer desconforto, irritação ou se notar qualquer
              problema, comunique-se imediatamente com seu dentista. l.
            </li>
            <li>
              Não tente realizar ajustes por conta própria; sempre consulte um
              profissiona
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow  bg-slate-50 rounded-none rounded-b-md">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Avaliação Periódica da Oclusão:
        </div>
        <div className="collapse-content px-12">
          <ul className="list-disc">
            <li>
              Garanta que a oclusão (a maneira como os dentes se encaixam ao
              morder) esteja correta, fazendo avaliações periódicas com seu
              dentista
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
