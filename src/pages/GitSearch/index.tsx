import CardProfile from 'components/CardProfile';
import CardSearch from 'components/CardSearch';
import { useEffect, useState } from 'react';
import { Profile } from 'Types/gitProfile';
import { getGitData } from 'Utils/requests';

const GitSearch = () => {
  const [gitLogin, setGitLogin] = useState<string>('');
  const [userProfile, setUserProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGitLogin(event.target.value);
  };

  const getProfileData = async () => {
    setIsLoading(true);
    setIsVisible(true);
    const profile = await getGitData(gitLogin);
    if (profile) {
      setUserProfile(profile);
    } else {
      setIsVisible(false);
    }

    setIsLoading(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getProfileData();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <CardSearch inputHandler={inputHandler} handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {isVisible && (
            <CardProfile profile={userProfile} loading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default GitSearch;
