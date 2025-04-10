import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SidebarDropdown = () => {
     const navigate = useNavigate();

     const logout = () => {
          Cookies.remove("accessToken");
          navigate("/");
     }

     return (
          <div className="absolute bottom-[75px] left-[50%] translate-x-[-50%] bg-white rounded-[15px_0px_15px_0px] shadow-lg border border-[#E5E7EB] w-full py-[6px] px-[6px] max-w-[265px]">
               <Link to="/admin-change-password" className="text-[14px] text-[#636C76] font-semibold px-[6px] py-[8px] block hover:bg-[#E7ECF9] border border-white rounded-[5px] hover:border hover:border-[#0D3FC6]">Change Password</Link>
               <button type="button" onClick={logout} className="text-[14px] w-full text-start text-[#636C76] font-semibold px-[6px] py-[8px] block hover:bg-[#E7ECF9] border border-white rounded-[5px] hover:border hover:border-[#0D3FC6]">Logout</button>
          </div>
     )
}

export default SidebarDropdown
