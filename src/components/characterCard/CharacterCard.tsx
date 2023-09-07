import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Button, LoadingIndicator } from '../../components';
import { getIsAuthenticated } from '../../features';
import { useToggleFavorite } from '../../hooks/';

type Props = {
  id: number;
  name: string;
  image: string;
};
export const CharacterCard = ({ id, name, image }: Props) => {
  const { isLoading, isFavorite, handleToggleFavorite } = useToggleFavorite(id);
  const isAuth = useSelector(getIsAuthenticated);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-zinc-100">
      <Link to={`/character/${id}`} className="block w-full max-w-[280px]">
        <img className="w-full" src={image} alt={name}></img>
        <h5 className="my-2 text-center text-sm font-bold tracking-tight text-gray-900">{name}</h5>
      </Link>
      <Button
        onClick={!isAuth ? () => navigate('/signin') : handleToggleFavorite}
        type={'button'}
        withBorder={false}
        widthParms={'w-full'}
        bgColor={isFavorite ? 'bg-red-700' : 'bg-green-700'}
        name={isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
      >
        {isLoading && <LoadingIndicator />}
      </Button>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
