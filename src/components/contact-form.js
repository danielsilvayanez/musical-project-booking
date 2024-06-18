import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
`;

const Button = styled.button`
  height: 40px;
`;

const RedStar = styled.span`
  color: red; /* Set the color of the star to red */
  margin-left: 5px; /* Adjust spacing between text and star */
`;

const DataTermsError = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

export const ContactForm = () => {
  const [errorMessageAgreement, setErrorMessageAgreement] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventdate: '',
    message: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setErrorMessageAgreement('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setErrorMessageAgreement(
        'Bitte die Datenschutzerklärung vorher einmal anhaken, dann geht´s direkt weiter 🙏🏻',
      );
      return;
    } else {
      const { name, email, eventdate, message } = formData;
      // Format the date in German format
      const formattedDate = formatGermanDate(eventdate);
      // Constructing the mailto link
      const subject = encodeURIComponent('New Contact Form Submission');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nEvent Date: ${formattedDate}\nMessage: ${message}`,
      );
      const mailtoLink = `mailto:danielsilvayanez@gmail.com?subject=${subject}&body=${body}`;

      // Opening the default email client with the pre-filled email
      window.location.href = mailtoLink;
    }
  };

  const formatGermanDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <FormSection>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Kontakt</h1>
        <Label htmlFor="name">
          Name
          <RedStar role="img" aria-label="star">
            ✪
          </RedStar>
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Nennst du uns bitte deinen Namen?"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="email">
          Email:
          <RedStar role="img" aria-label="star">
            ✪
          </RedStar>
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Gib hier bitte deine E-Mailadresse ein."
          value={formData.email}
          onChange={handleChange}
        />
        <Label htmlFor="eventdate">Datum der Veranstaltung: </Label>
        <Input
          type="date"
          id="eventdate"
          name="eventdate"
          value={formData.eventdate}
          onChange={handleChange}
        />
        <Label htmlFor="message">
          Nachricht:
          <RedStar role="img" aria-label="star">
            ✪
          </RedStar>
        </Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Du möchtest uns noch weiteres mitteilen? Um was für eine Veranstaltung geht es? Was erwartest du? Hier ist Platz dafür."
          value={formData.message}
          onChange={handleChange}
          required
        ></TextArea>
        <Button type="submit">senden</Button>
        <DataTermsError>{errorMessageAgreement}</DataTermsError>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme
          zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage
          elektronisch erhoben und gespeichert werden. Du kannst Deine
          Einwilligung jederzeit für die Zukunft per E-Mail and
          danielsilvayanez@gmail.com widerrufen.
        </CheckboxLabel>
      </StyledForm>
    </FormSection>
  );
};
