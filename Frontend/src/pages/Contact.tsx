import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const Contact: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-10">
      <ContactForm />
      <ContactDetails/>
     
    </div>
  );
};

export default Contact;
