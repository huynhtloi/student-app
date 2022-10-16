const Form = (props) => {
  const { handleOnAddStudent, setId, setName, setAge, id, name, age } = props;

  return (
    <form>
      <label htmlFor="id">id:</label>
      <input
        type="number"
        id="id"
        name="id"
        onChange={(e) => setId(e.target.value)}
        value={id}
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <br />
      <button type="button" onClick={handleOnAddStudent}>
        Add
      </button>
    </form>
  );
};

export default Form;
