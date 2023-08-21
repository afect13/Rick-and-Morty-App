import { Button, ListItem, PageLayout } from '../../components';

export const History = () => {
  // TODO: Мапить список, сделать проверку есть ли вообще что показать
  return (
    <PageLayout title={'History'}>
      <ul className="w-full">
        <ListItem isFavorites={false} />
        <ListItem isFavorites={false} />
        <ListItem isFavorites={false} />
      </ul>
      <div className="flex w-full justify-center">
        <Button type={'button'} name={'Remove all'} bgColor={'bg-red-600'} withBorder={false} />
      </div>
    </PageLayout>
  );
};
