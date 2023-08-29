import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  image: string;
}
export const CharacterCard = ({ id, name, image }: Props) => {
  return (
    <Link
      to={`/character/${id}`}
      className="block w-full max-w-[280px] bg-zinc-100 ease-in duration-200 hover:scale-105 "
    >
      <img className="w-full" src={image} alt={name}></img>
      <h5 className="my-2 text-center text-sm font-bold tracking-tight text-gray-900">{name}</h5>
    </Link>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
