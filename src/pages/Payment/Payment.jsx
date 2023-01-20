import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import PayForm from "../../components/PayForm/PayForm";
import "./Payment.sass";

const Payment = () => {
  return (
    <>
      <GoBackButton label="Как помочь/Сделать пожертвование" />
      <section className="payment">
        <PayForm />
      </section>
    </>
  );
};

export default Payment;
