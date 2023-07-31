import { Container, Table } from "react-bootstrap";

export default function BookMetaApp() {
    return (

        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Book Issued User</th>
                        <th>Issued At</th>
                        <th>Returned At</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Good Habit</td>
                        <td>Saiful Islam</td>
                        <td>23/4/2022</td>
                        <td>28/4/2022</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    );
}