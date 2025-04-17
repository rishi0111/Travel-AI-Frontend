const DestinationStateList = ({ destination }: { destination: any }) => {
  return (
    <div
      key={destination.id}
      className="relative overflow-hidden rounded-2xl shadow-lg w-60 group cursor-pointer"
    >
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTjiXKeHPDBTV5I0ittmLTuxBnEEHQs3nYN_-CfXtf9EF3cP7L_Li_sFT2XzVQ2Cqv7scJ_Ud0mru5T7jU-OwBGFL27yg1lmT9qVLdkwg"
          alt="Bali Beach"
          className="w-full h-80 transform scale-125 transition-transform duration-400 group-hover:translate-y-[-10px] rounded-2xl object-cover object-top"
        />
        <div className="bg-[#2323235f] absolute top-0 left-0 w-full h-full z-9"></div>
        <div className="bg-[#2323235f] absolute top-0 left-0 w-full h-full z-9 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
      </div>
        <div className="flex flex-col items-center absolute top-[38px] bottom-[10px] left-[17px] right-10 inset-0 w-52 h-62 transition-all duration-500 text-center z-[99] translate-y-[calc(100%-10px)] group-hover:translate-y-[0px] group-hover:justify-center" style={{ transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)" }}>
        <h3 className="text-white text-2xl font-bold mb-[10px]">
            {destination.name}
        </h3>
            <p className="text-base px-[10px] text-white leading-[20px]">
            Amsterdam is the capital and most populated city of the Kingdom of the
            Netherlands.
            </p>
        </div>
    </div>
  );
};

export default DestinationStateList;
