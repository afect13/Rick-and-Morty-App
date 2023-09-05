import rickandmorty from '../../assets/image/rick-and-mory.png';

type Props = {
  message: string;
};
export const NoResultsMessage = ({ message }: Props) => {
  return (
    <div className="flex flex-col w-full items-center gap-10 mt-10">
      <img className="h-56" src={rickandmorty} alt="rickandmorty" />
      <h3 className="text-4xl text-red-600">{message}</h3>
    </div>
  );
};
