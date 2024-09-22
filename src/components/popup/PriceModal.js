// PriceModal.js
import { useContext } from "react";
import { TokyoContext } from "@/src/Context";
import ModalContainer from "./ModalContainer";

const PriceModal = () => {
  const { priceModal, setPriceModal } = useContext(TokyoContext);

  return (
    <ModalContainer onClose={() => setPriceModal(null)}>
      <div className="service_popup_informations w-full h-auto clear-both float-left">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />    
          <div
            className="main"
            data-img-url={priceModal.image}
            style={{ backgroundImage: `url(${priceModal.image})` }}
          />
        </div>
        <div className="main_title">
          <h3>{priceModal.title}</h3>
        </div>
        <div className="descriptions w-full float-left">
          {priceModal.text.map((text, i) => (
            <p
              className={priceModal.text.length - 1 == i ? "" : "mb-[15px]"}
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </ModalContainer>
  );
};

export default PriceModal;
