import { Link } from "react-router-dom";

function ProductCard({ list }) {
  console.log(list);
  return (
    <div className="ProductCard">
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}/img/${list.img}`} alt="" />
        <span className="addCart">add to cart</span>
        {list.discount === "0" ? null : (
          <span className="discount">{list.discount}%</span>
        )}
      </div>
      <div className="">
        <p>{list.title}</p>
        <p>{list.price}</p>
      </div>
      <Link to={`/detail/${list._id}`} className="btn_add">
        상품디테일
      </Link>
    </div>
  );
}
export default ProductCard;
