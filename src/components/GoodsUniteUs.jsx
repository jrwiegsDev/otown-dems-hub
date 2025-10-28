// src/components/GoodsUniteUs.jsx

const GoodsUniteUs = () => {
  return (
    <div className="goods-unite-us-tile">
      <h3>Goods Unite Us</h3>
      <a href="https://www.goodsuniteus.com/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/Goods-Unite-Us.png" 
          alt="Goods Unite Us" 
          className="goods-logo"
        />
      </a>
      <p>
        Shop with your values. Goods Unite Us tracks corporate political donations and translates them into clear scores, 
        showing you which brands align with your beliefs. Search 7,000+ companies, see their political contributions, 
        and discover alternative brands that better match your values.
      </p>
      <a 
        href="https://www.goodsuniteus.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="goods-link"
      >
        Explore Brands & Download App →
      </a>
    </div>
  );
};

export default GoodsUniteUs;
