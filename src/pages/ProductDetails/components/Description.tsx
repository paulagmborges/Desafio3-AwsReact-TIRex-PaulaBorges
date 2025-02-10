import sofa1 from '../../../assets/img-product-detail/sofa1.svg'
import sofa2 from '../../../assets/img-product-detail/sofa2.svg'

 const Description = () => {
  return (
    <main className="flex flex-col font-poppins w-full h-[744px] ">
      <hr className="border-gray" />

      <div className="flex flex-row justify-center items-center  gap-[130px]  ">
        <h1 className="font-medium text-[24px]">Description</h1>
        <h1 className="text-[#9F9F9F] text-[24px] font-normal">Additional Information</h1>
      </div>

      <div className="flex flex-col m-auto w-[1026px] h-[174px] gap-[24px]  
       text-[#9F9F9F] font-normal text-[16px] ">
        <p >
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="flex gap-4 m-auto mt-10 mb-14">
        <img
          src={sofa1}
          alt=""
        />
        <img
          src={sofa2}
          alt=""
        />
      </div>

      <hr className="border-gray" />
    </main>
  );
};
export default Description;
