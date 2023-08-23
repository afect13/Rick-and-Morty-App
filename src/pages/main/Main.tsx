import { CharacterCard, PageContent } from '../../components';
import { useGetCharactersQuery } from '../../features';

export const Main = () => {
  // Мапить и выводить карточки
  // TODO: После проверки ПР подтянуть компоненты Loading и Error
  const { data, isLoading, isSuccess, isError } = useGetCharactersQuery();
  return (
    <PageContent title={'Main'}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {isSuccess && data.map((c) => <CharacterCard key={c.id} name={c.name} id={c.id} image={c.image} />)}
    </PageContent>
  );
};
