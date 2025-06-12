function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p className="text">{description}</p>
    </div>
  );
}

export default Card;
