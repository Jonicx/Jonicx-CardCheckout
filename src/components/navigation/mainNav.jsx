import React, {Component, Fragment} from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from "react-icons";
import CardPic from '../../Assets/debit_card_100px.png'


export default class MainNav extends Component  {

    render( ) {
        return (
            <Fragment>
                <nav className="navigation">
                    <div className="back">
                        <IconContext.Provider value={{ color: "black", className: "backIcon" }} >
                            <BsArrowLeft />
                        </IconContext.Provider>
                        <p className="Text_P_at_the_beginning">Back to e-shop?</p>
                    </div>
                    <div className="logo">
                        <div className="image">
                            <img src={CardPic} alt=""/>
                        </div>
                        <p className="Text_P_name_the_card">E-marchant Card</p>
                    </div>

                    <div className="country">
                        <select name="Country" className="Countries" id="ComboCountry">
                            <option defaultChecked value="Rwanda">
                                Rwanda(Frw)
                            </option>

                            <option value="UK">
                                UK(£)
                            </option>
                            <option value="USA">
                                USA($)
                            </option>
                        </select>
                    </div>
                </nav>

            </Fragment>
        )
    }
}