import { Outlet, Link } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>Hi i'm home </h1>
        <p>Hey whats'up let see the thing </p>

        <Link to="/" >Back</Link>
        </>
    )
}

export default Home;