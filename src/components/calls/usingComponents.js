import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
   const config = {
    public_key: 'FLWPUBK_TEST-6df6c1e52cae650afcaa03888a54a64c-X',
    tx_ref: 'AFRICA-XYZ-1',
    amount: 100,
    currency: 'RWF',
    country: 'RW',
    payment_options: 'card',
    meta:{
      client_email: email,
      client_firstname: firstName,
      client_lastname: lastName,
      client_address: address,
      client_apartement: apartement,
      client_city: city,
      client_country: country,
      client_postal: postal,
    },
    customer: {
      email: 'havugimana.jonathan4@gmail.com',
      phonenumber: '0782026090',
      name: 'Mucyo Jonathan',
    },
    customizations: {
      title: 'Let us help you!',
      description: 'Easy Safe and Reliable',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Safe Card payment',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
     <h1>Stay in touch we are at your service</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}