import './styles.css';

const CardSearch = () => {
  return (
    <div className="card-container">
      <h1>Encontre um perfil Github</h1>
      <div className="container search-container">
        <form onSubmit={() => {}}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={() => {}}
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
