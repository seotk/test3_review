import { useParams } from "react-router-dom";
import TabUi from "./TabUi";
import Count from "./Count";
import React from "react";

import Similar from "./Similar";
function Detail({ list }) {
  let { id } = useParams();
  id = id - 1;
  let dataList = list.filter((a) => {
    return a.category === list[id].category;
  });
  console.log(id);
  return (
    <section className="Detail mw">
      <h2>상품 상세 페이지</h2>
      <div className="detailCon">
        <div className="img">
          <img
            src={`${process.env.PUBLIC_URL}/img/${list[id].img}`}
            alt={list[id].title}
          />
        </div>
        <div className="info">
          <h3>{list[id].title}</h3>
          <p>{list[id]._id}번</p>
          <p>{list[id].price}원</p>
          <p>{list[id].discount} %</p>

          <Count />
          <button>-</button>
          <input type="text" value="1" />
          <button>+</button>
          <button type="submit">주문하기</button>
        </div>
      </div>
      <TabUi />
      <Similar list={dataList} />
    </section>
  );
}
export default Detail;
