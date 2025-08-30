import { CiLogin } from "react-icons/ci";

function Header(){
  return (
     <header id="header">
    <nav className="navbar">

<a href="#" className="logo">temeyouzi | تميزي</a>
<ul>

</ul>
<div className="account">
  <ul>
    <li>
  <a href="#">تسجيل الدخول<CiLogin /></a>
  </li>

  <li>
  <a href="#" className="btn-join">اشترك الان</a>
  </li>
  </ul>
</div>
    </nav>
  </header>
  );
   }


export default Header;