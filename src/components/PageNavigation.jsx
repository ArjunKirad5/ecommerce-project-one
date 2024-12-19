import { NavLink } from "react-router-dom"

const PageNavigation = ({title}) => {
    console.log(title);
    return (
        <>
        <NavLink to="/home">Home</NavLink>/{title}
        </>
    )
}

export default PageNavigation;