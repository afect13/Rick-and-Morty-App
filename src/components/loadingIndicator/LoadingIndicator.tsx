import { ReactComponent as LoadingSvg } from '../../assets/svg/loading.svg';

export const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center">
      <LoadingSvg className="h-6 w-6 fill-white" />
    </div>
  );
};
