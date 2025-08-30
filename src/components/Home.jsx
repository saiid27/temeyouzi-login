function Home(){
  return (
    <>
      {/* 1) HERO */}
      <section id="home">
        <div className="container">
          <div className="home-header">
            <span>انضم إلينا</span>
            <h1>أفضل فرص التعلم</h1>
            <p>منصّة تميّزي توفر دروسًا منظمة ونتائج الامتحانات بشكل بسيط وسريع.</p>
            <a href="#join-us" className="btn btn-red">ابدأ الآن</a>
            <a href="#features" className="btn btn-transparent">اعرف المزيد</a>
          </div>
        </div>
      </section>

      {/* 2) FEATURES */}
      <section id="features">
        <div className="container">
          <div className="features-head">
            <h2>ماذا نقدّم؟</h2>
            <p>أدوات سهلة، دروس منظّمة، ونتائج محدثة باستمرار.</p>
          </div>

          <div className="features-grid">
            <div className="card">
              <h3>دروس منظّمة</h3>
              <p>محتوى واضح مع ملخّصات وأمثلة وتمارين لكل مستوى.</p>
            </div>
            <div className="card">
              <h3>نتائج فورية</h3>
              <p>اطّلع على نتائج باكالوريا/إبريفة/كونكور بمجرد صدورها.</p>
            </div>
            <div className="card">
              <h3>واجهة بسيطة</h3>
              <p>تجربة استخدام سريعة ومناسبة لكل أحجام الشاشات.</p>
            </div>
            <div className="card">
              <h3>دعم مستمر</h3>
              <p>نساعدك في كل خطوة، من التسجيل وحتى التخرج.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) JOIN US */}
      <section id="join-us">
        <div className="container">
          <div className="content">
            <div className="h2">انضم إلى تميّزي اليوم</div>
            <p>ابدأ رحلتك التعليمية مع أدواتنا البسيطة والمباشرة.</p>
            <div className="mt-2">
              <a href="#" className="btn sky">إنشاء حساب</a>
              <a href="#" className="btn outline">تجربة سريعة</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4) SD (CTA خفيف/معلومة) */}
      <section id="sd">
        <div className="container">
          <div className="h3">جاهز تبدأ؟</div>
          <p>تمَيَّزي — تعلّم بذكاء وبأقل جهد.</p>
          <div className="mt-2">
            <a href="#" className="btn red">ابدأ الآن</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
