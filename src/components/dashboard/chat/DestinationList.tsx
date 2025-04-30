import PlanImg from "../../../assets/plan-img1.png"
const DestinationList = ({ destination }: { destination: { name: string, id: string } }) => {
     return (
          <div key={destination.id} className="relative overflow-hidden rounded-2xl shadow-lg w-60 group cursor-pointer">
               <div className="relative">
                    <img
                         src={PlanImg}
                         alt="Bali Beach"
                         className="w-full h-80 transform scale-125 transition-transform duration-300 group-hover:translate-x-5 rounded-2xl object-cover object-top"
                    />
                    <div className="bg-[#2929293d] absolute top-0 left-0 w-full h-full z-9"></div>
               </div>
               <h3 className="text-white text-2xl font-semibold absolute bottom-[10px] z-10 left-[15px] group-hover:hidden">{destination.name}</h3>
               <div className="absolute top-[38px] bottom-10 left-[17px] right-10 inset-0 bg-white/20 rounded-lg border border-white backdrop-blur-md flex flex-col items-center w-52 h-62 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-[99]">
                    <div className=" rounded-full mb-2">
                         <img
                              src="/mini-logo.svg"
                              alt="Logo"
                              className="w-12 h-12 rounded-full"
                         />
                    </div>
                    <p className="text-sm px-[10px] text-white leading-[20px]">Amsterdam is the capital and most populated city of the Kingdom of the Netherlands.</p>
               </div>
          </div>
     )
}

export default DestinationList;
