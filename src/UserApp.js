import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";



function UserApp() {

  return (
    <Stack direction="horizontal" gap={3}>
      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>name</td>
            <td>Saiful Islam</td>
          </tr>
        </tbody>
      </Table>
    </Stack>
  );
}

export default UserApp;