import { CharacterCard, PageContent } from '../../components';
import { useGetCharacterQuery } from '../../features';

export const Main = () => {
  // Мапить и выводить карточки
  // TODO: После проверки ПР подтянуть компоненты Loading и Error
  const { data, isLoading, isSuccess, isError } = useGetCharacterQuery();
  return (
    <PageContent title={'Main'}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {isSuccess &&
        data.map((c) => (
          <div key={c.id}>
            <CharacterCard name={c.name} id={c.id} image={c.image} />
          </div>
        ))}
    </PageContent>
  );
};
