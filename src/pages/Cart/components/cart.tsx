import { useContext } from "react";
import { Link } from "react-router-dom";
import { Trash } from "lucide-react";
import CartContext from "../../../context/CartContext";

const CartComponent = () => {
    const cartContext = useContext(CartContext);
   

    const handleIncrease = (id: number) => {
        if (increaseQuantity) {
          increaseQuantity(id);
        }
      };
      
      const handleDecrease = (id: number) => {
        if (decreaseQuantity) {
          decreaseQuantity(id);
        }
      };

    if (!cartContext) {
        return <p>Erro: O contexto do carrinho não foi encontrado.</p>;
    }

    const { cart, removeFromCart,increaseQuantity, decreaseQuantity } = cartContext;

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + Number(item.preco), 0);
    };

    return (
        <div className="flex flex-row justify-between mx-28 my-16 gap-10 font-poppins">

            <div className="w-2/3">
                <div className="flex bg-[#F9F1E7] justify-between p-4 text-[16px] text-center font-medium">
                    <p className="w-[200px]">Product</p>
                    <p className="w-[120px]">Price</p>
                    <p className="w-[100px] text-center">Quantity</p>
                    <p className="w-[120px] text-right">Subtotal</p>
                    <p className="w-[40px]"></p>
                </div>

                {cart.length === 0 ? (
                    <p className="text-center mt-4">O carrinho está vazio</p>
                ) : (
                    cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center p-4 border-b"
                        >
                            <div className="flex  items-center w-[200px]">
                                <img
                                    src={item.imageUrl}
                                    alt={item.titulo}
                                    className="w-[80px] h-[80px] rounded-lg  p-2"
                                />
                                <p className="ml-4 text-[16px]">{item.titulo}</p>
                            </div>
                            <p className="w-[120px] text-[16px] text-[#9F9F9F]">R$ {item.preco}</p>
                            <div className="flex items-center">
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded-l text-lg"
                                    onClick={() => handleDecrease(item.id)}
                                >
                                    −
                                </button>

                                <p className="w-[100px] text-center">{item.quantidade}</p>

                                <button
                                    className="px-2 py-1 bg-gray-200 rounded-r text-lg"
                                    onClick={() => handleIncrease(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            <p className="w-[120px] text-right">R$ {item.preco}</p>
                            <button
                                className="w-[40px] flex justify-center text-[#C8A165]"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash size={20} />
                            </button>
                        </div>
                    ))
                )}
            </div>


            <div className="w-1/3 h-[390px] flex flex-col bg-[#F9F1E7] p-8 rounded-lg gap-[20px] px-[75px] ">
                <h1 className="font-semibold text-[32px] mb-6 text-center">Cart Totals</h1>

                <div className="flex justify-between mb-4 text-[16px] font-medium">
                    <p>Subtotal</p>
                    <p className="text-[#9F9F9F] text-[16px] font-normal">R$ {calculateSubtotal().toFixed(2)}</p>
                </div>

                <div className="flex justify-between mb-6 text-[16px] font-medium  ">
                    <p>Total</p>
                    <p className="text-[#B88E2F]">R$ {calculateSubtotal().toFixed(2)}</p>
                </div>
                <div className="flex justify-center">
                    <Link to="/checkout">
                        <button className=" items-center w-[222px] h-[58px] border border-black border-solid rounded-xl hover:bg-black hover:text-white transition">
                            Check Out
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CartComponent;






