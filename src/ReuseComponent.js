import { react } from "react";
import UserComponent from "./UserComponent";

function ReuseComponent(){
    const emp = [
        {
            name: 'Sumit',
            email: 'sumitkaur11@gmail.com',
            gender: 'Male',
            MobileNumber: '8956123265',
            address : [
                {
                    Hno : "265",
                    Street:"Sector 4",
                    Country: "India",
                    State: "Jharkhand",
                    City: "Bokaro Steel City",
                    PinCode:"827004"
                },
                {
                    Hno : "754",
                    Street:"Airport Circle, Hansol",
                    Country: "India",
                    State: "Gujarat",
                    City: "Ahmedabad",
                    PinCode:"382475"
                },
                {
                    Hno : "19A",
                    Street:"Janpath",
                    Country: "India",
                    State: "Odisha",
                    City: "Bhubaneswar",
                    PinCode:"751001"
                },
                {
                    Hno : "507",
                    Street:"Marine Drive",
                    Country: "India",
                    State: "Maharashtra",
                    City: "Mumbai",
                    PinCode:"400002"
                },
                {
                    Hno : "12",
                    Street:"MG Marg",
                    Country: "India",
                    State: "Sikkim",
                    City: "Gangtok",
                    PinCode:"737101"
                }
            ]
        },
        {
            name: 'Anubhav',
            email: 'Anubhav89@gmail.com',
            gender: 'Male',
            MobileNumber: '9856215487',
            address : [
                {
                    Hno : "956",
                    Street:"India Next, Sector 83",
                    Country: "India",
                    State: "Haryana",
                    City: "Gurgaon",
                    PinCode:"122001"
                },
                {
                    Hno : "101",
                    Street:"Ashok Nagar",
                    Country: "India",
                    State: "Madhya Pradesh",
                    City: "Indore",
                    PinCode:"452001"
                },
                {
                    Hno : "221",
                    Street:"Christ Church Road",
                    Country: "India",
                    State: "Himachal Pradesh",
                    City: "Shimla",
                    PinCode:"171001"
                },
                {
                    Hno : "88",
                    Street:"VIP Road",
                    Country: "India",
                    State: "Assam",
                    City: "Guwahati",
                    PinCode:"781005"
                },
                {
                    Hno : "22B",
                    Street:"Park Street",
                    Country: "India",
                    State: "West Bengal",
                    City: "Kolkata",
                    PinCode:"700016"
                }
            ] 
        },
        {
            name: 'Himanshu',
            email: 'Himanshu@gmail.com',
            gender: 'Male',
            MobileNumber: '5698458712',
            address : [
                {
                    Hno : "154",
                    Street:"Bongaon Jhowdanga Panchpota Rd",
                    Country: "India",
                    State: "West Bengal",
                    City: "Shashadanga",
                    PinCode:"743273"
                },
                {
                    Hno : "45",
                    Street:"MG Road",
                    Country: "India",
                    State: "Maharashtra",
                    City: "Pune",
                    PinCode:"411001"
                },
                {
                    Hno : "33",
                    Street:"Rajpath Marg",
                    Country: "India",
                    State: "Delhi",
                    City: "New Delhi",
                    PinCode:"110001"
                },
                {
                    Hno : "908",
                    Street:"Anna Salai",
                    Country: "India",
                    State: "Tamil Nadu",
                    City: "Chennai",
                    PinCode:"600002"
                },
                {
                    Hno : "507",
                    Street:"Marine Drive",
                    Country: "India",
                    State: "Maharashtra",
                    City: "Mumbai",
                    PinCode:"400002"
                }
            ] 
        },
        {
            name: 'Rahul',
            email: 'Rahul@gmail.com',
            gender: 'Male',
            MobileNumber: '5621546587',
            address : [
                {
                    Hno : "623",
                    Street:"Lalbagh",
                    Country: "India",
                    State: "Karnataka",
                    City: "Mangalore",
                    PinCode:"575003"
                },
                {
                    Hno : "19A",
                    Street:"Janpath",
                    Country: "India",
                    State: "Odisha",
                    City: "Bhubaneswar",
                    PinCode:"751001"
                },
                {
                    Hno : "88",
                    Street:"VIP Road",
                    Country: "India",
                    State: "Assam",
                    City: "Guwahati",
                    PinCode:"781005"
                },
                {
                    Hno : "101",
                    Street:"Ashok Nagar",
                    Country: "India",
                    State: "Madhya Pradesh",
                    City: "Indore",
                    PinCode:"452001"
                },
                {
                    Hno : "33",
                    Street:"Rajpath Marg",
                    Country: "India",
                    State: "Delhi",
                    City: "New Delhi",
                    PinCode:"110001"
                }
            ] 
        },
        {
            name: 'Mohit',
            email: 'Mohit@gmail.com',
            gender: 'Male',
            MobileNumber: '1289453265',
            address : [
                {
                    Hno : "101",
                    Street:"Ashok Nagar",
                    Country: "India",
                    State: "Madhya Pradesh",
                    City: "Indore",
                    PinCode:"452001"
                },
                {
                    Hno : "22B",
                    Street:"Park Street",
                    Country: "India",
                    State: "West Bengal",
                    City: "Kolkata",
                    PinCode:"700016"
                },
                {
                    Hno : "45",
                    Street:"MG Road",
                    Country: "India",
                    State: "Maharashtra",
                    City: "Pune",
                    PinCode:"411001"
                },
                {
                    Hno : "908",
                    Street:"Anna Salai",
                    Country: "India",
                    State: "Tamil Nadu",
                    City: "Chennai",
                    PinCode:"600002"
                },
                {
                    Hno : "33",
                    Street:"Rajpath Marg",
                    Country: "India",
                    State: "Delhi",
                    City: "New Delhi",
                    PinCode:"110001"
                }
            ] 
        },
        {
            name: 'Abhinash',
            email: 'Abhinash@gmail.com',
            gender: 'Male',
            MobileNumber: '230265862',
            address : [
                {
                    Hno : "734",
                    Street:"Manikonda",
                    Country: "India",
                    State: "Andhra Pradesh",
                    City: "Hyderabad",
                    PinCode:"500089"
                },
                {
                    Hno : "12",
                    Street:"MG Marg",
                    Country: "India",
                    State: "Sikkim",
                    City: "Gangtok",
                    PinCode:"737101"
                },
                {
                    Hno : "221",
                    Street:"Christ Church Road",
                    Country: "India",
                    State: "Himachal Pradesh",
                    City: "Shimla",
                    PinCode:"171001"
                },
                {
                    Hno : "88",
                    Street:"VIP Road",
                    Country: "India",
                    State: "Assam",
                    City: "Guwahati",
                    PinCode:"781005"
                },
                {
                    Hno : "507",
                    Street:"Marine Drive",
                    Country: "India",
                    State: "Maharashtra",
                    City: "Mumbai",
                    PinCode:"400002"
                }
            ] 
        }
    ];
    return(
        <div>
            <h1> Reuse Component in React Js</h1>
            {
                emp.map((item, i)=>
                    <UserComponent data={item}/>
                )
            }
        </div>
    )
}

export default ReuseComponent;