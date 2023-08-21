import { CharacterCard, PageLayout } from '../../components';

export const Main = () => {
  // Мапить и выводить карточки
  return (
    <PageLayout title={'Main'}>
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </PageLayout>
  );
};
