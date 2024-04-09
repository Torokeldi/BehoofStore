import "./dropdown.css";
import triangle from "../../assets/triangle.svg";

const Dropdown: React.FC = () => {
  return (
    <div className="container">
      <div className="dropdown-block">
        <details className="dropdown-list">
          <summary>
          По последним отзывам <img src={triangle} alt="" />
          </summary>
          <ul className="sort-list">
            <li>
              <a href="#">По последним отзывам</a>
            </li>
            <li>
              <a href="#">По релеватности</a>
            </li>
            <li>
              <a href="#">По каличеству отзывов</a>
            </li>
            <li>
              <a href="#">По последним отзывам</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Dropdown;
