import { CharacterCard, PageContent } from '../../components';
import { useSearchCharacterQuery } from '../../features';

export const Search = () => {
  // Мапить и выводить карточки
  // const { data } = useSearchCharacterQuery('rick');
  // console.log(data);
  return (
    <PageContent title={'Search Result'}>
      {/* <CharacterCard />
      <CharacterCard /> */}
    </PageContent>
  );
};
