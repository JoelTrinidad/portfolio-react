import { useRef, useState } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false,
  });
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [successSendForm, setSuccessSendForm] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false);

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setEmptyInputs(false);
    setErrorSendForm(false);
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === "" ||
      contactDates.checkedTerms === false
    ) {
      setEmptyInputs(true);
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setSuccessSendForm(true);
          },
          (error) => {
            setErrorSendForm(true);
          }
        );
    }
  };

  return (
    <S.ContainerContact>
      <S.Title>Contact with me</S.Title>
      <S.ContainerForm>
        {successSendForm ? (
          <S.SuccessMessage>The form was sent successfully</S.SuccessMessage>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Your name"
              type="text"
              name="name"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
            <S.InputForm
              placeholder="Your email"
              type="email"
              name="email"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
            <S.TextArea
              placeholder="Wirte your message"
              name="message"
              onChange={(e) =>
                setContactDates({ ...contactDates, message: e.target.value })
              }
              value={contactDates.message}
            />
            <S.ContainerConditions>
              <input
                type="checkbox"
                onChange={(e) =>
                  setContactDates({
                    ...contactDates,
                    checkedTerms: e.target.checked,
                  })
                }
              />
              <span>Accept the terms and conditions</span>
            </S.ContainerConditions>
            <S.Button type="submit">Send</S.Button>
          </S.Form>
        )}
        {emptyInputs && (
          <S.TextError>
            You should fill all the inputs and accept the terms
          </S.TextError>
        )}
        {errorSendForm && (
          <S.TextError>There was an error, try it later.</S.TextError>
        )}
      </S.ContainerForm>
    </S.ContainerContact>
  );
}
