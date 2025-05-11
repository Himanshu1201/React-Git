import React from "react";
import {Table} from 'react-bootstrap';
function HandleArrayListWithBootstrap(){
    const students = [
        {
            name: 'Sumit',
            email: 'sumitkaur11@gmail.com',
            gender: 'Male',
            MobileNumber: '8956123265' 
        },
        {
            name: 'Anubhav',
            email: 'Anubhav89@gmail.com',
            gender: 'Male',
            MobileNumber: '9856215487' 
        },
        {
            name: 'Himanshu',
            email: 'Himanshu@gmail.com',
            gender: 'Male',
            MobileNumber: '5698458712' 
        },
        {
            name: 'Rahul',
            email: 'Rahul@gmail.com',
            gender: 'Male',
            MobileNumber: '5621546587' 
        },
        {
            name: 'Mohit',
            email: 'Mohit@gmail.com',
            gender: 'Male',
            MobileNumber: '1289453265' 
        },
        {
            name: 'Sumit',
            email: 'sumitkaur11@gmail.com',
            gender: 'Male',
            MobileNumber: '8956123265' 
        },
        {
            name: 'Abhinash',
            email: 'Abhinash@gmail.com',
            gender: 'Male',
            MobileNumber: '230265862' 
        },
    ]

    return(
        <div>
            <h1> Handle Array List With Bootstrap in React </h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Gender</td>
                    <td>Mobile Number</td>
                </tr>
            {
                students.map((data, i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                        <td>{data.MobileNumber}</td>
                    </tr>
                )
            }
                </tbody>
            </Table>
        </div>
    )
}

export default HandleArrayListWithBootstrap