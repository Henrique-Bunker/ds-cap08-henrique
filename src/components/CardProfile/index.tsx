import './styles.css';

const CardProfile = () => {
  return (
    <div className="card-profile-container">
      <div className="card-profile">
        <div className="profile-pic">
          <img
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            alt="Profile"
          />
        </div>
        <div className="profile-content">
          <h6 className="text-primary">Informações</h6>
          <p>
            <strong>Perfil:</strong> https://api.github.com/users/acenelio
          </p>
          <p>
            <strong>Seguidores:</strong> 4379
          </p>
          <p>
            <strong>Localidade:</strong> Uberlândia
          </p>
          <p>
            <strong>Nome:</strong> Nelio Alves
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
