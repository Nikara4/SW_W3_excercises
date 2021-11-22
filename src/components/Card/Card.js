import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardIconDescription from "./CardIconDescription";
import recipe from "./data";

const { user, title, date, image, intro, showMore } = recipe;

function Card() {
  return (
    <div className="card">
      <CardHeader user={user} title={title} date={date} />
      <CardDescription img={image} descr={intro} />
      <CardIconDescription showMore={showMore} />
    </div>
  );
}

export default Card;
