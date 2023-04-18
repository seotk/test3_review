import { useState } from "react";
import ProductCard from "./ProductCard";

function Shop({ list }) {
  let [dataList, setDataList] = useState(list);
  return (
    <section className="Shop mw">
      <h2>Shop</h2>
      <nav className="btnCon">
        <button
          className="btn"
          onClick={() => {
            setDataList(list);
          }}
        >
          상품등록순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a.price - b.price))
          }
        >
          낮은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.price - a.price))
          }
        >
          높은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a.discount - b.discount))
          }
        >
          높은할인율
        </button>
      </nav>
      <ul className="listCon">
        {dataList.map((a) => {
          return (
            <>
              <li className="list" key={list._id}>
                <ProductCard list={a} />
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
}
export default Shop;
