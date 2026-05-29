
export default function Footer() {
  return (
    <div className="container footer">

      <div className="mapDiv">
        <iframe
          src="https://www.google.com/maps?q=Харьков,+Клочковская+3&output=embed"
          loading="lazy"
        ></iframe>
      </div>

      <div className="infoDiv">

        <div className="logo">
          <span>ValMari</span>
        </div>

        <h1>0 (800) 508-622</h1>

        <p className="address">
          Харьков, Клочковская, д. 3
        </p>

        <div className="menu">

          <div className="leftMenu">
            <p>Курсы обучения</p>
            <p>Вебинары</p>
            <p>Видео-уроки</p>
            <p>Прайс</p>
            <p>Расписание</p>
          </div>

          <div className="rightMenu">
            <p>Акции</p>
            <p>О нас</p>
            <p>Блог</p>
            <p>Магазин</p>
          </div>

        </div>


        <p className="privacy">
          Политика конфиденциальности
        </p>

      </div>

    </div>
  );
}