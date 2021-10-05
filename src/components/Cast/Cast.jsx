import PropTypes from 'prop-types';
import s from './Cast.module.css';
const Cast = ({ casts }) => {
  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id} className={s.cast__item}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              height={300}
            />
            <div>
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  onSubmit: PropTypes.object,
};
export default Cast;
