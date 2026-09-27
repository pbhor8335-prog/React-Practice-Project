
import "./StudentPortal.css";

function StudentPortal() {



    const Student = [
        {
            id: 1,
            name: "Pratiksha",
            dep: "Computer Engineering",
            city: "Pune"
        },
        {
            id: 2,
            name: "Nikita",
            dep: "ENTC Engineering",
            city: "Mumbai"
        },
        {
            id: 3,
            name: "Aditi",
            dep: "Mechanical Engineering",
            city: "Sangli"
        },
        {
            id: 4,
            name: "Samruddhi",
            dep: "Civil Engineering",
            city: "Nashik"
        }
    ];

    return (
        <div className="student-page">

            <h1>Student Portal</h1>
            <div className="student-container">
            {Student.map((student) => (
                <div className="student-card" key={student.id}>

                    <h3><strong>Name : </strong>{student.name}</h3>
                    <h4><strong>Dep :</strong>{student.dep}</h4>
                    <p><strong>City : </strong>{student.city}</p>

                </div>
            ))}
            </div>

        </div>
    );
}

export default StudentPortal;