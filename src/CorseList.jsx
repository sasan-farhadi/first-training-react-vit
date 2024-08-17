import CourseCard from "./courseCard"
function CorseList() {
    const courses = [
        { id: 1, name: "React", description: "This is React" },
        { id: 2, name: "JS", description: "This is JS" },
        { id: 3, name: "Next", description: "This is Next" },
        { id: 4, name: "Node", description: "This is Node" },
    ]
    return (
        <>
            <h3>Corse List</h3>
            <ul>
                {courses.map((course) =>
                (
                    <CourseCard key={course.id}  data={course}/>
                ))}
            </ul>
        </>
    )
}
export default CorseList