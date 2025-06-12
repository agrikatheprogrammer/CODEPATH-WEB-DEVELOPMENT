function Card({ title, description, image, url }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p className="text">{description}</p>
      <button onClick={() => window.open(url, '_blank')}>Read This</button>
    </div>
  );
}

export default Card;
