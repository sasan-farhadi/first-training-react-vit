function CourseCard({data : {name , description}}) {
    return (
        <li>
            <h4>{name}</h4>
            <p>{description}</p>
        </li>
    )
}
export default CourseCard
