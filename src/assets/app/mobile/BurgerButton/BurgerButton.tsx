import * as SC from './BurgerButton.style.ts'
import {FC} from "react";
import {MobileMenuProps} from "../MobileMenu/MobileMenu.tsx";

const BurgerButton:FC<MobileMenuProps> = ({close}) => {
    return (
        <SC.BurgerMenu onClick={close}>
            <div className="cl-btn-6">
                <div className="cl-btn-6-in">
                    <div className="cl-btn-6-txt">Закрыть</div>
                </div>
            </div>
        </SC.BurgerMenu>
    );
};
export default BurgerButton;
