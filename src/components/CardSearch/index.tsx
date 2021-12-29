import './styles.css';

interface Props {
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const CardSearch = (props: Props) => {
  const { inputHandler, handleSubmit } = props;
  return (
    <div className="card-container">
      <h1>Encontre um perfil Github</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              className="search-input"
              placeholder="Usuário Github"
              onChange={inputHandler}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardSearch;
