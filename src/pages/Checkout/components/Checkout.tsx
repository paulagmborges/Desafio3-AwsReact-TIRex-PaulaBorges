import BillingDetails from "./BillingDetails";
import SubmitButton from "./ButtonSubmit";
import { useState } from 'react';
import { useCart } from '../../../hook/useCart';

const CheckoutComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { cart } = useCart();


  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + Number(product.preco) * product.quantidade, 0);
  };

  const getTotal = () => {
    return calculateSubtotal();
  };


  return (
    <div className="flex gap-[26px] w-full justify-normal">
      <div className="w-1/2"><BillingDetails /></div>

      <div className="font-poppins flex flex-col items-center mt-[63px] w-1/2 mr-[98px]">
        <div className="flex flex-col w-[533px] gap-5">
          <div className="flex justify-between">
            <h2 className="text-[24px] font-medium text-center">Product</h2>
            <h2 className="text-[24px] font-normal">Subtotal</h2>
          </div>
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between text-[16px] font-normal">
              <div className="flex gap-4">
                <p className="text-[#9F9F9F]">{product.titulo}</p>
                <p className="text-[12px]">X</p>
                <p className="text-[12px]">{product.quantidade || 1}</p>
              </div>
              <p className="text-[16px] font-light">R${(Number(product.preco) * product.quantidade || 1)}</p>
            </div>
          ))}
          <div className="flex justify-between text-[16px]">
            <p className="font-normal">Subtotal</p>
            <p className="font-light">R${calculateSubtotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Total</p>
            <p className="font-bold text-[#B88E2F] text-[24px]">R${getTotal().toFixed(2)}</p>
          </div>

          <hr className="border-gray8 mt-6 mb-4" />

          <div>
          <label className="flex">
                  <input
                    type="radio"
                    value="directBankTransfer"
                    checked={selectedOption === 'directBankTransfer'}
                    onChange={() => setSelectedOption('directBankTransfer')}
                    className="mr-2"
                  />
                  Direct Bank Transfer
                </label> 
            <p className="text-[16px] text-[#9F9F9F] font-light">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <div className="flex flex-col gap-5 mb-6 w-[528px] h-[107px] ">
              <div>
                <label className="flex text-[#9F9F9F]">
                  <input
                    type="radio"
                    value="directBankTransfer"
                    checked={selectedOption === 'directBankTransfer'}
                    onChange={() => setSelectedOption('directBankTransfer')}
                    className="mr-2 text-[#9F9F9F]"
                  />
                  Direct Bank Transfer
                </label>
              </div>
              <div className="flex flex-col gap-[18px]">
                <label className="flex text-[16px] text-[#9F9F9F] font-light">
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    checked={selectedOption === 'Cash On Delivery'}
                    onChange={() => setSelectedOption('Cash On Delivery')}
                    className="mr-2"
                  />
                  Cash On Delivery
                </label>
                <p className="text-[16px] font-light">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                  <span className="font-semibold">privacy policy</span>.
                </p>

                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
