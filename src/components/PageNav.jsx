import { Link } from "react-router-dom";
import "../CSS/PageNav.css";

function PageNav({ prev, next }) {
  return (
    <div className="page-nav">
      {prev ? (
        <Link to={prev} className="nav-btn prev">
          {"<< Previous"}
        </Link>
      ) : (
        <span></span>
      )}
      {next ? (
        <Link to={next} className="nav-btn next">
          {"Next >>"}
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default PageNav;
