

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
                <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/singleprodface-detail.png" alt="Facebook Icon" className="w-[20px] h-[20px]" />
                <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/singleprodtwitwr-detail.png" alt="Twitter Icon" className="w-[20px] h-[20px]" />
                <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/singleprodlinkedin-detail.png" alt="LinkedIn Icon" className="w-[20px] h-[20px]" />

            </div>
        </div>
    );
}

export default LinkSocial;

