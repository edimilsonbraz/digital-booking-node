import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m do centro</span>
        <span className="siTaxiOp">Gratís taxi do aeroporto</span>
        <span className="siSubtitle">
          Apartamento com Ar-condicionado
        </span>
        <span className="siFeatures">
          1 Garagem • 1 banheiro • 21m² 1 cama King Size
        </span>
        <span className="siCancelOp">Cancelamento grátis </span>
        <span className="siCancelOpSubtitle">
        Você pode cancelar mais tarde, então garanta esse ótimo preço hoje!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excelente</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">R$ 332</span>
          <span className="siTaxOp">Incluso impostos e taxas</span>
          <button className="siCheckButton">Ver disponibilidade</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
