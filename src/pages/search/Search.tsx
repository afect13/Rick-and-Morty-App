import { CharacterCard, PageLayout } from '../../components';

export const Search = () => {
  // Мапить и выводить карточки
  return (
    <PageLayout title={'Search Result'}>
      <CharacterCard />
      <CharacterCard />
    </PageLayout>
  );
};
