function Banner({ title, dis, num }) {
    // let { title, dis, num } = props
    return (
        <div>
            <hr />
            <h1>{title}</h1>
            <p>{dis}</p>
            <h2>{num} my number</h2>
            <hr />
        </div>
    )
}
export default Banner