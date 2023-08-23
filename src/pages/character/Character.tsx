import { useParams } from 'react-router-dom';

import { CharacterProfile, PageContent } from '../../components';
import { useGetCharacterQuery } from '../../features';

export const Character = () => {
  const { charId } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetCharacterQuery(Number(charId));

  return (
    <PageContent title={'Character'}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {isSuccess && (
        <CharacterProfile
          name={data.name}
          image={data.image}
          location={data.location}
          status={data.status}
          species={data.species}
          gender={data.gender}
        />
      )}
    </PageContent>
  );
};
