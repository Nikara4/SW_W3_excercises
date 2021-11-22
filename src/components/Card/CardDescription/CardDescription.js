function CardDescription({ img, descr }) {
  return (
    <>
      <img src={img} alt="paella recipe" />
      <div className="card__intro">{descr}</div>
    </>
  );
}

export default CardDescription;
