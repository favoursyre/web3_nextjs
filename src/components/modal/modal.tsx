//The script for modal

//Libraries
import { FC } from "react";
import { ModalProps } from "@/config/interfaces";

///Commencing the code

/**
 * @title Modal Component
 * @returns The Modal component
 */
const Modal: FC<ModalProps> = ({ show, handleModal, children, customClass }) => {

  //console.log('Children: ', children)

  return(
    <div className={`modal ${customClass}  ${show ? 'show' : ''}`}>
      <div className="modal_back" onClick={() => {
        handleModal()
        if (customClass === "play-modal") {
          window.location.reload()
        }
      }}></div>
			<div className="modal__content">
				{/* {isNaN(children) ? <></> : children} */}
        {children}
			</div>
		</div>
  )
}

export default Modal;