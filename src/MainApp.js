import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserApp from './UserApp';
import Navigation from './Navigation';


function MainApp() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
        </Route>
      </Routes>
      <Stack direction="horizontal" gap={3}>
        <Table striped="columns">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Copies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>name</td>
              <td>author name</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      </Stack>
    </BrowserRouter>
  );
}

export default MainApp;