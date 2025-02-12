import { useForm } from "react-hook-form";

const BillingDetails = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const checkCep = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, ""); // Remover caracteres não numéricos
    if (cep.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();

      if (!data.erro) {
        setValue("state", data.uf);
        setValue("streetAddress", data.logradouro);
        setValue("town", data.localidade);
        setValue("province", data.bairro);
      } else {
        console.error("CEP não encontrado.");
      }
    } catch (err) {
      console.error("Erro ao buscar CEP:", err);
    }
  };

  return (
    <div className="flex justify-center w-[1242px]">
      <div className="flex flex-col justify-center items-center font-poppins w-1/2 ml-[100px] mt-[50px] mb-[52px]">
        <h1 className="font-semibold text-[36px] text-start mr-[235px] mb-3">
          Billing details
        </h1>

        <form 
          id='billingForm' 
          onSubmit={handleSubmit(onSubmit)} 
          className="ml-[75px]">
          <div className="flex font-medium text-[16px] mb-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                {...register("firstName", {
                  required: "First Name is required",
                  pattern: {
                    value: /^[A-Za-zÀ-ÿ]{2,}$/,
                    message: "At least 2 letters, no numbers allowed",
                  },
                })}
                type="text"
                className="w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
              />
              {errors.firstName && (
                <p className="text-red-500">{String(errors.firstName.message)}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                {...register("lastName", {
                  required: "Last Name is required",
                  pattern: {
                    value: /^[A-Za-zÀ-ÿ\s]+$/,
                    message: "No numbers allowed",
                  },
                })}
                type="text"
                className="w-[211px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
              />
              {errors.lastName && (
                <p className="text-red-500">{String(errors.lastName.message)}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[18px] font-medium text-base leading-6 tracking-normal">
            <label htmlFor="companyName">Company Name (Optional)</label>
            <input
              id="companyName"
              {...register("companyName")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              {...register("zipCode")}
              type="text"
              onBlur={checkCep}
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="country">Country / Region</label>
            <input
              id="country"
              {...register("country")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="streetAddress">Street address</label>
            <input
              id="streetAddress"
              {...register("streetAddress")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="state">State</label>
            <input
              id="state"
              {...register("state")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="town">Town / City</label>
            <input
              id="town"
              {...register("town")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="province">Province</label>
            <input
              id="province"
              {...register("province")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="additionalAddress">Additional Address</label>
            <input
              id="additionalAddress"
              {...register("additionalAddress")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />

            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              {...register("emailAddress", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />
            {errors.emailAddress && (
              <p className="text-red-500">{String(errors.emailAddress.message)}</p>
            )}

            <label htmlFor="additionalInfo">Additional information</label>
            <input
              id="additionalInfo"
              {...register("additionalInfo")}
              type="text"
              className="w-[453px] h-[75px] border-[1px] border-[#9F9F9F] rounded-[10px] px-4 py-2"
            />
          </div>
          

        </form>
      </div>
    </div>
  );
};

export default BillingDetails;







