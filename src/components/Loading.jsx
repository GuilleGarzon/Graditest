const Spinner = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="container">
          <div className="loading">Cargando...</div>
        </div>
      )}
    </>
  );
};

export default Spinner;
