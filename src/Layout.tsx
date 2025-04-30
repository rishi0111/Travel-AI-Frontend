import Sidebar from "./components/dashboard/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
     const isAuthRoute = window.location.pathname === '/' ||
          window.location.pathname === '/register' ||
          window.location.pathname === '/forgot-password' ||
          window.location.pathname === '/confirm-password' ||
          window.location.pathname === '/otp-verification';

     return (
          <div className="flex">
               {!isAuthRoute && <Sidebar />}
               <main className="flex-1">
                    {children}
               </main>
          </div>
     );
};

export default Layout;
