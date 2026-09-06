function Object(){

   let student = {

    name:"Nikita",
    age:21,
    course:"ENTC Engineering",
    marks:85

    }
    return(
        <div style={{
            border:"2px solid black",
            width:"400px",
            height:"350px",
            boxShadow:"0px 0px 10px auto",
            margin:"auto",
            padding:"5px",
            color:"blue",
            textAlign:"center",
            marginTop:"10px",
            background:"pink",
            marginTop:"20px"
        
        }}>
            <h1>Student Information</h1>

            <p>Name :{student.name}</p>
            <p>Age :{student.age}</p>
            <p>Course :{student.course}</p>
            <p>Marks :{student.marks}</p>

                <button style={{textDecoration:"none",backgroundColor:"#007BFF"}}>
                    Update
                </button>
        </div>
    )
}

// XPathExpression

export default Object;