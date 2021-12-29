import {
  ProfilePicSkeleton,
  ProfileContentSkeleton,
} from 'components/Skeletons';
import { useEffect, useState } from 'react';
import { Profile } from 'Types/gitProfile';
import './styles.css';

interface Props {
  profile?: Profile;
  loading: boolean;
}

const CardProfile = (props: Props) => {
  const { profile, loading } = props;
  const [mQuery, setMQuery] = useState<number>(216);

  useEffect(() => {
    let minMediaQuery = window.matchMedia('(min-width: 768px)');
    minMediaQuery.addEventListener('change', () => {
      console.log(window.innerWidth);

      setMQuery(window.innerWidth);
    });
  }, [setMQuery]);
  return (
    <div className="card-profile-container">
      <div className="card-profile">
        <div className="profile-pic">
          {loading ? (
            <ProfilePicSkeleton />
          ) : (
            <img src={profile?.avatar_url} alt={profile?.name} />
          )}
        </div>
        <div className="profile-content">
          {loading ? (
            <ProfileContentSkeleton maxWidth={mQuery} />
          ) : (
            <>
              <h6 className="text-primary">Informações</h6>
              <p>
                <strong>Perfil:</strong>{' '}
                <a className="text-primary" href={profile?.url}>
                  {profile?.url}
                </a>
              </p>
              <p>
                <strong>Seguidores:</strong> {profile?.followers}
              </p>
              <p>
                <strong>Localidade:</strong> {profile?.location}
              </p>
              <p>
                <strong>Nome:</strong> {profile?.name}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
