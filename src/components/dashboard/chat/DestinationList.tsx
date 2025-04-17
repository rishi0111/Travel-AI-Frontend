const DestinationList = ({ destination, index }: { destination: any, index: number }) => {
     return (
          <div key={destination.id} className="w-full min-w-[270px] bg-white mb-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] relative cursor-pointer rounded-[8px] overflow-hidden">
               <div className="h-[180px] overflow-hidden">
                    <img
                         src="https://public.readdy.ai/ai/img_res/21ddc9d57a133e634320125b872e4ce5.jpg"
                         alt="Bali Beach"
                         className="w-full h-full object-cover object-top"
                    />
               </div>
               <div className="px-4 py-3">
                    <h3 className="text-lg font-semibold">{destination.name}</h3>
               </div>
               <div className="bg-[#E7ECF9] rounded-[3px] absolute top-2 left-2 h-[25px] w-[25px] flex items-center justify-center">
                    <span className="text-[14px] font-bold text-[#05073C]">{index + 1}</span>
               </div>
          </div>
     )
}

export default DestinationList;
