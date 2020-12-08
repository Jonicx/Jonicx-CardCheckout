import React, {Component, Fragment} from "react";
import CompanyPic from '../../Assets/Africa-xyz-Logo-300x57-1.png';
import paypal_ogo1 from '../../Assets/1024px-PayPal_logo.svg.png';
import visaCard from '../../Assets/visa_125px.png';
import masterCard from '../../Assets/mastercard_125px.png';
import Question from '../../Assets/help_16px.png';
import MasterLogo from '../../Assets/Logomastercard_logo_125px.png';
import MomoBanking from '../../Assets/momo.png';
import MomoPay from '../calls/payment';
import ReactLoading from 'react-loading';
import PayPal from '../calls/paypal';
import Flutterwave from '../calls/flutterwave';
const momo = new MomoPay();

export default class checkout extends Component{
    state = {
        card_number: "",
        card_valid: "",
        card_code: "",
        open_momo: false,
        number: "",
        error:false,
        sucess: false,
        loading: false
    }
    makePayment = () => {
        momo.payMomo(this.setLoading , this.setErrorMade, this.state.number ,this.setSuccess)
    }
    changeToMomo = () => {
        console.log("Changed")  
        const { open_momo } = {...this.state}
        this.setState({open_momo : !open_momo   })
    }
    setLoading = (loading) => {
        this.setState({
            loading: loading
        })
    }
    setSuccess = (loading) => {
        alert("success it's made")
    }
    setErrorMade = (loading) => {
        alert("Your account is below minmum balance      ")
        this.setState({
            error: loading
        })
    }
    cardNumberChanger = (event) => {
        // if(event.target.value )
    }

    cardValidChanger = () => {
        
    }

    cardCodeChanger = () => {
        
    }
    render( ) {
        return (
            <Fragment>
                <div className="Main">
                    <div className="Checkout_Form">
                        <div className="Form_Header">
                            <img className="ImageLogo" src={CompanyPic} alt=""/>
                            <h1 className="Left_hand_Paragraph">3D Secure payment gateway</h1>
                        </div>
                    </div>
                    <div className="Main_Form_Part">
                        <div className="Tab_Side">
                            <h1 className="Tab1_Text">Card payment &gt;</h1>
                            <div className="GrayTabs">
                                <img className="PayPal_Logo" width="150px" src={paypal_ogo1} alt=""/>
                                <img className="Bank" width="150px" src={MomoBanking} alt=""/>
                            </div>
                        </div>
                        <div className="FormSide">
                            <h3 className="ForSide_Title">Safe Card payment</h3>
                            <div className="Form_Side_Images">
                                <img className="ImageCard" src={masterCard} alt=""/>
                                <img className="ImageCard" src={visaCard} alt=""/>
                                <img className="ImageCard" src={masterCard} alt=""/>
                                <img className="ImageCard" src={visaCard} alt=""/>
                            </div>
                            <div className="Div1Title">
                            <h3 className="Text_Beneath_CardImages">Does your card permit online payments?</h3>
                            <img className="Marks" src={Question} alt=""/>
                            </div>
                            <div className="DivValidTill">
                            <h4 className="Aligns">Email :</h4>
                            <input type="text" name="CardNo" id="CardNumberId" className="TxtInput" placeholder="someone@example.com"/>
                            </div>
                            <div className="DivValidTill">
                            <h4 className="Aligns2">Firstname :</h4>
                            <input type="text" name="CardNo" id="CardNumberId" className="TxtInput2" placeholder="Firstname"/>
                            </div>
                            <div className="DivValidTill">
                            <h4 className="Aligns3">Lastname :</h4>
                            <input type="text" name="CardNo" id="CardNumberId" className="TxtInput3" placeholder="Lastname"/>
                            </div>
                            <div className="DivValidTill">
                            <h4 className="Aligns5">Postal Code :</h4>
                            <input type="text" name="CardNo" id="CardNumberId" className="TxtInput5" placeholder="P.O Box___"/>
                            </div>
                            <div><Flutterwave/></div>
                            <p className="or"> or </p> <br />

                            <div className="PaypalButtons2">
                    <PayPal setSucess={this.setSuccess} total="100" />
                            </div>

                            <div><div/>
                            <div className="momoform">
                                <label className="momoLable">Mobiel number  :</label>
                                <input className="momoInput" type="number" name="card_number" id="card" onChange={(event) => this.setState({number: event.target.value}) } placeholder="number " />
                            </div>
                                <button className="checkoutBtn" onClick={this.makePayment}> {!this.state.loading  ? "Mobile Pay" : <ReactLoading type={"bars"} />  } </button>
                            </div>
                        </div>
                        <div className="InfoSide">
                            <div className="BlueBlackground_Title">
                                <h1 className="Title_Graypart">Here is your payment info</h1>
                            </div>
                            <div className="DivMarchant">
                                <div className="Marchant_Title">
                                    <h3 className="SubTitles_GrayPart">Merchant</h3>
                                    <img className="Marks3" src={Question} alt=""/>
                                </div>
                                <h5 className="info">ID:RW0456</h5>
                                <h5 className="info">AFRICA STORE</h5>
                                <h5 className="info">Kigali- Rwanda(RW)</h5>
                                <h5 className="info">pay.africa.store</h5>
                            </div>
                            <div className="DivPayment">
                                <div className="Payment_Title">
                                <h3 className="SubTitles_GrayPart">Payment Number</h3>
                                <img className="Marks2" src={Question} alt=""/>
                                </div>
                                <h5 className="info">#48452</h5>
                            </div>
                            <div className="DivTotal">
                                <h3 className="SubTitles_GrayPart">Total</h3>
                                <h1 className="TotalAmount">202.00 EUR</h1>
                            </div>
                            <div className="DivLogoEnds">
                                <img className="Master" src={MasterLogo} alt=""/>
                                <h3 className="mastercardName">mastercard</h3>
                                <img className="Visa" src={visaCard} alt=""/>
                                <h3 className="mastercardName">visacard</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}