import { useFetch } from "../hooks/useFetch";
//useFecth custom hook
export const FetchComponent = () => {
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h1>Lista de usuarios fetch customhook</h1>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : errors ? (
        <p>Ha ocurrido un error: {errors}</p>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users) => {
              return (
                <tr key={users.id}>
                  <th scope="row">{users.id}</th>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
