import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';



function MainApp() {

    return (
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
    );
}

export default MainApp;