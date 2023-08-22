import { CharacterCard, PageContent } from '../../components';

export const Main = () => {
  // Мапить и выводить карточки
  return (
    <PageContent title={'Main'}>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </PageContent>
  );
};
