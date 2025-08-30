import { CiLogin } from "react-icons/ci";

function Header(){
  return (
     <header id="header">
    <nav className="navbar">

<a href="#" className="logo">temeyouzi | تميزي</a>
<ul>
  <li>
    <a href="#">الصفحة الرئيسية</a>

  </li>
   <li>
    <a href="#">الدروس</a>
    
  </li>
   <li>
    <a href="#">نتائج باكالوريا 2025</a>
  </li>
   <li>
    <a href="#">نتائج ابريفة 2025</a>
  </li>
   <li>
    <a href="#">نتائج كونكور 2025</a>
  </li>
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