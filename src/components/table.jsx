const MyTable = (props) => {
  const { students, handleOnEditStudent } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
          return (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button data-id={student.id} onClick={handleOnEditStudent}>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
