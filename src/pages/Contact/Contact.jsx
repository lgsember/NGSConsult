import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Form from "../../components/form/form";
import { Banner } from "../../components/banner/banner";
import { TextContent } from "../../components/textContent/textContent";
import { IconLink } from "../../components/iconLink/iconLink";
import { FiFileText, FiLinkedin } from "react-icons/fi";

export function Contact() {
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    consulta: "",
  });

  const formFields = [
    {
      name: "nombre",
      label: "Nome:",
      type: "text",
      placeholder: "Seu nome",
      required: true,
      value: formValues.nombre,
      onChange: handleChange,
    },
    {
      name: "email",
      label: "Email:",
      type: "email",
      placeholder: "Seu melhor email",
      required: true,
      value: formValues.email,
      onChange: handleChange,
    },
    {
      name: "consulta",
      label: "Consulta:",
      type: "textarea",
      placeholder: "O que gostaria de consultar?",
      required: true,
      value: formValues.consulta,
      onChange: handleChange,
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    emailjs.send(
      'service_gkpig1h',
      'template_1wnpe5b',
      formValues,
      'RM-s55sYfmUYqVd_M'
    )
      .then((result) => {
        console.log(result.text);
        alert("Obrigado pela consulta. Responderei em breve!");
        setFormValues({ nombre: "", email: "", consulta: "" });
      }, (error) => {
        console.log(error.text);
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
      });
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

  let bannerSrc = "/src/img/contact.png";

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-8 py-8 min-h-[calc(100vh-160px)]">
      <div className="flex-1 mt-16 animate-[slideInFromLeft_1s_ease-out]">
        <div className="animate-fadeIn">
          <TextContent 
            title="Entre em contato comigo!"
            subtitle=""
            description=""
          />
        </div>
        <div className="animate-[fadeInUp_0.5s_ease-out] animate-delay-300">
          <Form onSubmit={handleSubmit} fields={formFields} />
        </div>
        <div className="animate-fadeIn animate-delay-600">
          <TextContent 
            title=""
            subtitle="Minha trajetória:"
            description=""
          />
        </div>
        
        <div className="mt-5 flex justify-center gap-5 animate-[fadeInUp_0.5s_ease-out] animate-delay-900">
          {iconLinks.map((icon, index) => (
            <div
              key={index}
              className={`transition-transform duration-300 ease-in-out hover:scale-110 animate-delay-${1200 + index * 200}`}
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
  
      <div className="flex-1 flex justify-center items-start animate-[slideInFromRight_1s_ease-out]">
      <Banner 
              src={bannerSrc} 
              alt="Nair formal"
            />
      </div>
    </div>
  );
}
