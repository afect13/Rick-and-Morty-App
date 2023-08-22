import { Button, ListItem, PageContent } from '../../components';

export const Favorites = () => {
  // TODO: Мапить список, сделать проверку есть ли вообще что показать
  return (
    <PageContent title={'Favorites'}>
      <ul className="w-full">
        <ListItem isFavorites={true} />
        <ListItem isFavorites={true} />
        <ListItem isFavorites={true} />
      </ul>
      <div className="flex w-full justify-center">
        <Button type={'button'} name={'Remove all'} bgColor={'bg-red-600'} withBorder={false} />
      </div>
    </PageContent>
  );
};
