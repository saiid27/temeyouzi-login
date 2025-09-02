import { HiOutlineLogin } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";

function Header(){
  return (
     <header id="header">
    <nav className="navbar">

<a href="#" className="logo"> تميزي | temeyouzi</a>

<ul>
 

</ul>
<div className="account">
  <ul>
    <li>
  <a href="#"><HiOutlineLogin />
  
  تسجيل الدخول</a>
  </li>

  <li>
  <a href="#" className="btn-join">
  <FaAddressBook />
  
  اشترك الان</a>
  </li>
  </ul>
</div>
    </nav>
  </header>
  );
   }


export default Header;