import { Button } from '../../components';

export const CharacterProfile = () => {
  // TODO: isFavorites удалить, и получать данные по API.
  const isFavorites = true;
  return (
    <div className="flex w-full max-w-[700px] mx-auto rounded-lg p-4 bg-zinc-100">
      <div className=" w-2/4">
        {/* Картинка персонажа */}
        <img className="w-full rounded-2xl p-2" src="" alt=""></img>
      </div>
      <div className="flex flex-col w-3/4 border-zinc-900/20 border-l">
        {/* Имя примерно такого вида  Cowboy Rick */}
        <h2 className="m-2 text-left text-2xl font-bold text-gray-700"></h2>
        <div className="flex items-center m-2">
          <div className=" w-3 h-3 rounded-full bg-red-700 mr-2"></div>
          {/* Тут такая информация будет Unknown - Human */}
          <p className="text-left text-lg font-bold text-gray-700"></p>
        </div>
        <div className="m-2">
          <p className="text-left text-sm  text-gray-500">Last known location:</p>
          {/* Последняя локация примерно такого вида Citadel of Ricks */}
          <p className=" text-left text-lg  text-gray-700"></p>
        </div>
        <div className="m-2">
          <p className="text-left text-sm  text-gray-500">Gender:</p>
          {/* Гендер */}
          <p className=" text-left text-lg  text-gray-700"></p>
        </div>
        <div className="flex w-full my-1 mx-2">
          {isFavorites ? (
            <Button type={'button'} withBorder={false} bgColor={'bg-green-700'} name={'Add To Favorites'}></Button>
          ) : (
            <Button type={'button'} withBorder={false} bgColor={'bg-red-700'} name={'Remove From Favorites'}></Button>
          )}
        </div>
      </div>
    </div>
  );
};
