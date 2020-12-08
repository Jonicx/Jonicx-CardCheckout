import React from 'react';
import { useFlutterwave, FlutterWaveButton } from 'react-flutterwave';
 
export default function Flutterwave() {
  const config = {
    public_key: 'FLWPUBK-6d57e5eacda06ee5cea4a5b823a82b4e-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'RWF',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'havugimana.jonat@gmail.com',
      phonenumber: '08102909304',
      name: 'Jonathan',
    },
    customizations: {
      title: 'Transaction',
      description: 'Payments for items you bought',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
 
  const handleFlutterPayment = useFlutterwave(config);
 
  const fwConfig = {
  };
 
  return (
    <div className="App">
      <button
      className="checkoutBtnHook"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
            },
            onClose: () => {},
          });
        }}
      >
       Continue to payment
      </button>
 
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
} 