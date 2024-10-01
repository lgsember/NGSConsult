import React from "react";
import { Link } from "react-router-dom";
import { TextContent } from "../../components/textContent/textContent";
import { Banner } from "../../components/banner/banner";
import { TextAbout } from "../../components/textAbout/TextAbout";

export function About() {

  let bannerSrc = "https://i.ibb.co/QCBt3DH/about.png";

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] p-4 overflow-hidden">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-start justify-center mb-5 md:mb-0 md:mr-10">
            <TextContent title="Quem Sou" subtitle="" description="" />
            <div className="text-3xs space-y-2">
              {[
                { pbold: "Mais de 30 anos de experiência profissional", pcommon: "em Administração e Ciências Sociais" },
                { pbold: "Mestre em Planejamento e professora", pcommon: "em cursos de pós-graduação em Gestão" },
                { pbold: "Consultora Estratégica", pcommon: "na Secretaría Municipal de Planejamento, Orçamento e Finanças" },
                { pbold: "Pesquisadora de Planejamento Estratégico", pcommon: "em Gestão Empresarial e Pública" },
                { pbold: "Estudo e aplicação de tecnologias", pcommon: "em Gestão Estratégica de Pessoas" },
                { pbold: "Estudo de extensão", pcommon: "em Business Partner e Análise do Comportamento" },
                { pbold: "Membro afiliado", pcommon: "da Associação Brasileira de Recursos Humanos (ABRH)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`animate-[fadeInUp_0.5s_ease-out] opacity-0`}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <TextAbout pbold={item.pbold} pcommon={item.pcommon} />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md h-auto animate-[slideInFromRight_1s_ease-out] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Banner 
              src={bannerSrc} 
              alt="Nair despojada"
            />
            </div>
          </div>
        </div>
        

        <div className="mt-8 flex justify-center">
          <Link 
            to="/contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out animate-fadeIn"
          >
            Entre em contato
          </Link>
        </div>

      </div>
    </div>
  );
}
