function Student(Props){
    console.log(Props);
    return(
        <div>
            <h1>Student Functional Component : React Props</h1> 
            <p>Name : {Props.name}</p>
            <p>Email : {Props.email}</p>
            <p>Mobile Number : {Props.mobile}</p>
        </div>
    )
}

export default Student