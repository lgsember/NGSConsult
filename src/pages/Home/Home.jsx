import React from "react";
import { TextContent } from "../../components/textContent/textContent";
import { Banner } from "../../components/banner/banner";
import { IconLink } from "../../components/iconLink/iconLink";
import { FiFileText, FiLinkedin } from "react-icons/fi";

export function Home() {
  const textContentProps = {
    title: "NGS💡",
    subtitle: "Consultoria & Gestão",
    description: "Solução eficaz na palma da sua mão",
  };

  const iconLinks = [
    {
      type: "file",
      href: "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4700041Y6&tokenCaptchar=03AEkXODD4WfJxTW2tDgxGHk7tPiErluKMH2ds0f_7CUATiKRwOmxI4pO53MrtpW-7tiZltBqGvfbb9MP8wGOQd8s9JHMtPxrL-qihTqc6KuqllnAq-J5ssTtTYzTp9SoHqHUO84nq-vVSHmXRf1xl2x5nZZzIJwSWe_R8C4rigD5V7XEMx6wSR0PW-TFpENei6EDVpWHdIW6zGNUJzolOvtv8CtseRqGuoaA6HKtsk9teBAgGhbldQOgewYQlv4rYjVwvMgRVVYGqtCnh2UzeR8zEM5GaX09sX_fbDq43cfqrhcuheD-D7S4oEx0LU4CCRWyD3LAC64q86BjQlL7JtGzYv_bLFO_WcfPYmcYI0ksc5x-nQcxuDznwYzzjb8YFUjWN1m13aIgGtj_O4LDLiCNttE0QH25rrYDUq4zxxq3EqN1md5yTw1zrT10HM4ag86rGMA6Zcyyh7GaQZbwnnw0In9JCu-oaXTgkfWuPInni90_j_mKzm0AqQrmZIlbL4BLe5PkwbJTzcGASGAh50tOjjiil_VvIf3FpLeHisccjim-Zb_C3yr18FejOPFx0jWXDmHJf9H5hK3Q4l-cjxaKG4vYs2QtS2A",
      label: "Currículo Lattes",
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/nair-gonzalez-sember-09254725/?originalSubdomain=br",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[calc(105vh-80px)] p-4">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white bg-opacity-80 rounded-[5%] p-8 shadow-md max-w-5xl animate-fadeIn">
        <div className="md:w-1/2 flex flex-col items-center justify-center mb-5 md:mb-0 md:mr-10">
          <div className="animate-slideIn">
            <TextContent {...textContentProps} />
          </div>

          <div className="flex justify-center mt-10 animate-slideIn">
            {iconLinks.map((icon, index) => (
              <div
                key={index}
                className={`transition-transform duration-300 ease-in-out hover:scale-110 ${`animation-delay-${600 + index * 200}`}`}
              >
                <IconLink
                  icon={icon.type === "file" ? FiFileText : FiLinkedin}
                  href={icon.href}
                  label={icon.label}
                />
              </div>
            ))}
          </div>

        </div>

        <div className="md:w-1/2 flex justify-center items-center animate-slideIn">
          <div className="w-full h-full max-h-[500px]">
          <Banner 
              src="https://ibb.co/XkbbLfP"
              alt="Profile de Nair"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
