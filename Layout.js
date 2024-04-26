import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
       <table>
        <tr>
            <td>
            <Link to="/"><img src="unnamed-removebg-preview.png" alt="img.jpg" height="100px" width="100px"/></Link>
            
            
            </td>
            
        </tr>
        
        

       </table>
            
          
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;