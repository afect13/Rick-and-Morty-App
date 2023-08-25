import { CharacterCard, Loading, PageContent } from '../../components';
import { useGetCharactersQuery } from '../../features';

export const Main = () => {
  const { data, isLoading, isSuccess, isError } = useGetCharactersQuery();
  return (
    <PageContent title={'Main'}>
      {isLoading && <Loading />}
      {isError && <div>Error...</div>}
      {isSuccess && data.map((c) => <CharacterCard key={c.id} name={c.name} id={c.id} image={c.image} />)}
    </PageContent>
  );
};
