import { Container, Table } from "react-bootstrap";

export default function UserApp() {
    return (
        <Container>
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
                        <td>Mark</td>
                        <td>saiful.sust.cse@outlook.com</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}