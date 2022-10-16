import { useState } from "react";
import Form from "../components/form";
import MyTable from "../components/table";

const removeById = (arr, id) => {
  const requiredIndex = arr.findIndex(el => {
     return el.id === String(id);
  });
  if(requiredIndex === -1){
     return false;
  };
  return !!arr.splice(requiredIndex, 1);
};

const Main = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [students, setStudents] = useState([]);
  const handleOnAddStudent = () => {
    setStudents((oldArray) => [...oldArray, { id, name, age }]);
    setId("");
    setName("");
    setAge(0);
  };

  const handleOnEditStudent = (e) => {
    const id = e.target.dataset.id
    console.log(removeById(students, id))
    // setStudents((oldArray) => removeById(oldArray, id))
  }
  return (
    <>
      <h3>Manage Student</h3>
      <Form
        handleOnAddStudent={handleOnAddStudent}
        setId={setId}
        setName={setName}
        setAge={setAge}
        id={id}
        name={name}
        age={age}
      />
      <br />
      <MyTable
      handleOnEditStudent={handleOnEditStudent}
        students={students}
        setId={setId}
        setName={setName}
        setAge={setAge}
      />
    </>
  );
};

export default Main;
