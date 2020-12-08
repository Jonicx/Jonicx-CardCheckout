import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
  const config = {
   public_key: 'FLWPUBK_TEST-6df6c1e52cae650afcaa03888a54a64c-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card',
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
  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
      className="checkoutBtnHook"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Pay
      </button>
    </div>
  );
}