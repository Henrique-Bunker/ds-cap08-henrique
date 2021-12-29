import CardProfile from 'components/CardProfile';
import CardSearch from 'components/CardSearch';

const GitSearch = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <CardSearch />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <CardProfile />
        </div>
      </div>
    </div>
  );
};

export default GitSearch;
