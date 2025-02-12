import singeprodface from '../../../assets/img-product-detail/singleprodface.png'
import singeprodtwiter from '../../../assets/img-product-detail/singleprodtwitwr.png'
import singeprodlinkedin from '../../../assets/img-product-detail/singleprodlinkedin.png'

interface LinkSocialProps {
    sku: string;
    category: string;
    tags: string[];
}

const LinkSocial = ({ sku, category, tags = [] }: LinkSocialProps) => {
    return (
        <div className="flex flex-col text-[16px] text-[#9F9F9F] font-normal font-poppins gap-2 mt-[20px]">
            <div className="flex justify-start w-full pt-[35px] border-t"></div>

            <p>SKU:{sku}</p>

            <p>Category:{category}</p>

            <p>Tags:{tags.join(", ")}</p>

            <div className="flex gap-[25px] p-1">
                <p>Share:</p>
                <img src={singeprodface} alt="Facebook Icon" className="w-[20px] h-[20px]" />
                <img src={singeprodtwiter} alt="Twitter Icon" className="w-[20px] h-[20px]" />
                <img src={singeprodlinkedin} alt="LinkedIn Icon" className="w-[20px] h-[20px]" />

            </div>
        </div>
    );
}

export default LinkSocial;

