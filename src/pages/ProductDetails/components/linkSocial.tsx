import singeprodface from '../../../assets/img-product-detail/singleprodface.png'
import singeprodtwiter from '../../../assets/img-product-detail/singleprodtwitwr.png'
import singeprodlinkedin from '../../../assets/img-product-detail/singleprodlinkedin.png'

const LinkSocial = () => {
    return (
        <div className="text-[16px] text-[#9F9F9F] font-normal font-poppins ">
            <div className="flex justify-start w-full pt-[35px] border-t"></div>

            <p className="p-1 gap-[10px]">SKU:</p>

            <div className="flex p-1 gap-[10px]">
                <p>Category:</p>
                <p>Sofas</p>
            </div>

            <div className="flex gap-[10px] p-1">
                <p>Tags:</p>
                <p>Sofa</p>
                <p>Chair,</p>
                <p>Home,</p>
                <p>Shop</p>
            </div>

            <div className="flex gap-[25px] p-1">
                <p>Share:</p>
                <img src={singeprodface} alt="Facebook Icon" className="w-[20px] h-[20px]"/>
                <img src={singeprodtwiter} alt="Twitter Icon" className="w-[20px] h-[20px]"/>
                <img src={singeprodlinkedin} alt="LinkedIn Icon" className="w-[20px] h-[20px]"/>

            </div>
        </div>
    );
}

export default LinkSocial;

