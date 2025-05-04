import React from "react";

function HandleArrayWithList(){
    // const students = ['Sumit', 'Anubhav', 'Himanshu', 'Rahul', 'Mohit', 'Rohit', 'Abhinash'];
    const students = [
        {
            name: 'Sumit',
            email: 'sumitkaur11@gmail.com',
            Gender: 'Male',
            MobileNumber: '8956123265' 
        },
        {
            name: 'Anubhav',
            email: 'Anubhav89@gmail.com',
            Gender: 'Male',
            MobileNumber: '9856215487' 
        },
        {
            name: 'Himanshu',
            email: 'Himanshu@gmail.com',
            Gender: 'Male',
            MobileNumber: '5698458712' 
        },
        {
            name: 'Rahul',
            email: 'Rahul@gmail.com',
            Gender: 'Male',
            MobileNumber: '5621546587' 
        },
        {
            name: 'Mohit',
            email: 'Mohit@gmail.com',
            Gender: 'Male',
            MobileNumber: '1289453265' 
        },
        {
            name: 'Sumit',
            email: 'sumitkaur11@gmail.com',
            Gender: 'Male',
            MobileNumber: '8956123265' 
        },
        {
            name: 'Abhinash',
            email: 'Abhinash@gmail.com',
            Gender: 'Male',
            MobileNumber: '230265862' 
        },
    ]

    // mapp looping

    // students.map((item) => {
    //     console.warn('My Name is using map : ', item);
    // })

    // for(let i=0; i < students.length; i++){
    //     console.warn('My Name is using for loop: ', students[i]);
    // }
    return(
        <div>
            <h1> Handle Array With List in React </h1>
            <table border="1" align="center">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Gender</td>
                    <td>Mobile Number</td>
                </tr>
            {
                students.map( (data)=>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                        <td>{data.MobileNumber}</td>
                    </tr>
                )
            }
            </table>
        </div>
    )
}

export default HandleArrayWithList