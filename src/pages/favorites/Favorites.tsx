import { Button, CharacterListItem, PageLayout } from '../../components';

export const Favorites = () => {
  // TODO: Мапить список, сделать проверку есть ли вообще что показать
  return (
    <PageLayout title={'Favorites'}>
      <ul className="w-full">
        <CharacterListItem />
        <CharacterListItem />
        <CharacterListItem />
      </ul>
      <div className="flex w-full justify-center">
        <Button type={'button'} name={'Remove all'} bgColor="bg-red-600" withBorder={false} />
      </div>
    </PageLayout>
  );
};
