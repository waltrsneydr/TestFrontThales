import './App.css';
import connection from "./utils/UseFetch";
import { useState, useEffect, useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import TopMenu from './utils/Menu';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
  }, []);

  function handleSubmit(e) {

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const getEmployee = async () => {
      const data = await connection(formData.get('idEmployee'));
      if (data.data != null) {
        if (data.data.length == null) {
          setData([data.data]);
        } else {
          setData(data.data);
        }
      } else {
        setError([data]);
        setShow(true);
      }
    }

    getEmployee();
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID'
      },
      {
        accessorKey: 'employee_name',
        header: 'Name'
      },
      {
        accessorKey: 'employee_salary',
        header: 'Salary'
      },
      {
        accessorKey: 'employee_age',
        header: 'Age'
      },
      {
        accessorKey: 'profile_image',
        header: 'Image'
      },
      {
        accessorKey: 'employee_anual_salary',
        header: 'Anual Salary'
      }
    ],
    [],
  );

  return (

    <div>
      <TopMenu />
      <form method="post" onSubmit={handleSubmit} className='form'>
        <div></div>
        <Form.Control type="number" name="idEmployee" placeholder="Id Employee" />
        <br></br>
        <Button variant="dark" type="submit">Search</Button>
      </form>
      <ToastContainer
        className="p-3"
        position="top-end"
        style={{ zIndex: 1 }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{error != null ? error[0].status : ""}</strong>
          </Toast.Header>
          <Toast.Body>{error != null ? error[0].message : ""}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className='tabla'>
        <div></div>
        {data != null ? (
          <MaterialReactTable columns={columns} data={data} />
        ) : (
          <h3>No existen datos</h3>
        )}

      </div>
    </div>
  );

}

export default App;
