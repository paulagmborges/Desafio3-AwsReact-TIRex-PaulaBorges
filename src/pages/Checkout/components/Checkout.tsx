const CheckoutComponent = () => {
    return (
        <div className='flex flex-row gap-[36px] justify-center mt-[3px]'>
            <div className='flex flex-col justify-center items-center font-poppins w-1/2 ml-[100px] mb-[30px] '>
                <h1 className='font-semibold text-[36px] text-start'>Billing details</h1>
                <div className='flex gap-[31px] justify-between font-medium text-base leading-6'>
                    <div>
                        <p>First Name</p>
                        <input type="text"
                            placeholder=""
                            className="w-[211px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input type="text"
                            placeholder=""
                            className="w-[211px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    </div>
                </div>
                <div className='flex flex-col gap-[18px] font-medium text-base leading-6 tracking-normal'>
                    <p>Company Name (Optional)</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    <p>Zip Code</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    <p>Country / Region</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />

                    <p>Street address</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    <p>State</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    <p>Town / City</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    <p>Province</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />

                    <p>Additional Address</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                    <p>Email Address</p>
                    <input type="text"
                        placeholder=""
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />

                    <input type="text"
                        placeholder="Additional information"
                        className="w-[453px] h-[75px] flex border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2" />
                </div>
            </div>

            <div className="font-poppins flex flex-col items-center mt-14 w-1/2 mr-[98px] ">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <h2 className="text-[24px] font-medium text-center">Product</h2>
                        <h2 className="text-[24px] font-normal">Subtotal</h2>
                    </div>
                    <div className="flex justify-between text-sm">
                        <div className="flex gap-4">
                            <p className="text-gray-500">Asgaard sofa</p>
                            <p>X</p>
                            <p>1</p>
                        </div>
                        <p className="text-[16px] font-light">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p>Subtotal</p>
                        <p className="font-light">Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm">Total</p>
                        <p className="font-bold text-[#B88E2F] text-[24px]">Rs. 250,000.00</p>
                    </div>

                    <hr className="border-gray8 mt-6 mb-4" />

                    <div>
                        <div className="flex flex-col gap-5 mb-6">
                            <div>
                                <label className="flex">
                                    <input
                                        type="radio"
                                        value="directBankTransfer"
                                        checked={false}
                                        onChange={() => {}}
                                        className="mr-2"
                                    />
                                    Direct Bank Transfer
                                </label>
                                <p className="text-[16px] text-[#9F9F9F] font-light">Make your payment directly into our bank account. Please use your Order ID as the payment 
                                    reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            </div>
                            <div>
                            <label className="flex text-[16px] text-[#9F9F9F] font-light">
                                    <input
                                        type="radio"
                                        value="directBankTransfer"
                                        checked={false}
                                        onChange={() => {}}
                                        className="mr-2"
                                    />
                                    Direct Bank Transfer
                                </label>
                                <label className="flex text-[16px] text-[#9F9F9F] font-light">
                                    <input
                                        type="radio"
                                        value="Cash On Delivery"
                                        checked={false}
                                        onChange={() => {}}
                                        className="mr-2"
                                    />
                                    Cash On Delivery
                                </label>
                                <p className="text-[16px] font-light">Your personal data will be used to support your experience throughout this website, 
                                    to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span> .</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutComponent;

