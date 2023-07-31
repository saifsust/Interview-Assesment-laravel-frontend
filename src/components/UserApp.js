import { Container, Table } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

export default function UserApp() {

    const getUsers = async () => {
        await fetch('http://localhost:8000/api/user/all', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    getUsers();

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
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>saiful.sust.cse@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}