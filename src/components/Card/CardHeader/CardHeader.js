import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function CardHeader({ title, date }) {
  const Icon = () => {
    return (
      <div className="card__user">
        <FontAwesomeIcon icon={faUser} size="1x" />
      </div>
    );
  };

  return (
    <>
      <Icon />
      <div className="card__title">{title}</div>
      <div className="card__title--date">{date}</div>
    </>
  );
}

export default CardHeader;
