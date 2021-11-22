import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown as arrowDown,
  faAngleUp as arrowUp
} from "@fortawesome/free-solid-svg-icons";

function CardIconDescription({ showMore }) {
  const [expand, setExpand] = useState(false);

  const Icon = ({ img }) => {
    return (
      <FontAwesomeIcon
        icon={img}
        size="1x"
        onClick={() => setExpand(!expand)}
      />
    );
  };

  function toggleIcon() {
    if (!expand) {
      return <Icon img={arrowDown} />;
    } else {
      return <Icon img={arrowUp} />;
    }
  }

  return (
    <>
      <div className="card__icon">{toggleIcon()}</div>
      {expand && <div className="card__full--recipe">{showMore}</div>}
    </>
  );
}

export default CardIconDescription;
