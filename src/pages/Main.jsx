import MainEvent from "./MainEvent";
import MainTopList from "./MainTopLIst";

function Main({ list }) {
  return (
    <section className="mw">
      <MainEvent list={list} />
      <MainTopList list={list} />
    </section>
  );
}
export default Main;
