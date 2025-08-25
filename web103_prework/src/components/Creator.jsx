import './stylesheets/Creator.css';
import { Link } from 'react-router-dom';

export default function Creator({ id, name, url, description, imageURL = null, viewdetails = true }) {
  return (
    <div className="creator-card">
      <p>{name}</p>
      {imageURL && <img src={imageURL} alt={name} />}
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      <br />
      {viewdetails && (
        <>
          <Link to={`/creator/${id}`}>View Details</Link>
        </>
      )}
      <Link to={`/creator/${id}/edit`}>Edit</Link>
    </div>
  );
}
