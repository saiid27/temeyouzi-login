

import Header from "./components/Header";
import Main from "./components/Main";

import Footer from "./components/Footer";

function App(){
  return <>
<Header/>
<Main/>
 {/* زر واتساب عائم */}
      <a
        href="https://wa.me/49677414?text=مرحبا، أود الاستفسار عن الدورة"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
       
        <span>
          اضغط
      للتواصل معنا  

        </span>
        <i className="fa fa-whatsapp"></i>
      </a>
<Footer/>


  </>;
}

export default App;