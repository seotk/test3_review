import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function MainTopList({ list }) {
  console.log("asd", list);
  let dataList = list.filter((a) => a.category === "top");
  return (
    <section className="MainTopList mw">
      <h2>Shop The Latest</h2>
      <Link to="/">View All</Link>
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
export default MainTopList;
