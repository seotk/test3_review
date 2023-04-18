import { Link } from "react-router-dom";

function Header({ pathName }) {
  console.log("head", pathName);
  let bar = pathName === "/" ? "" : "bar";
  let linkName = document.querySelectorAll(".gnb > a");
  linkName.forEach((a) => {
    a.classList.remove("on");
    if (a.getAttribute("href") === pathName) {
      a.classList.add("on");
    } else if (
      a.getAttribute("href") === "/Shop" &&
      pathName.indexOf("/detail/") === 0
    ) {
      a.classList.add("on");
    }
  });
  // let on = (a) => {
  //   let text = a.target.innerText;
  //   if (text === pathName) {
  //     a.target.parentElement.classList.add("on");
  //   } else {
  //     a.target.parentElement.classList.remove("on");
  //   }
  // };
  return (
    <header className={`hd mw ${bar}`}>
      <h1>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
        </Link>
      </h1>
      <nav className="gnb">
        <Link to="/Shop" className="">
          Shop
        </Link>
        <Link to="/Blog" className="">
          Blog
        </Link>
        <Link to="/Story" className="">
          Our Story
        </Link>
      </nav>
      <div className="person">
        <Link to="/">
          <i className="fa-sharp fa-solid fa-magnifying-glass "></i>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-cart-shopping "></i>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-user "></i>
        </Link>
      </div>
    </header>
  );
}
export default Header;
