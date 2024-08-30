import { Link } from "react-router-dom"
export default function NotFound()
{
    return (
        <>
            <h1>404 Error This page do not exist</h1>  <br />
            <h2>Browser wants you to</h2>
            <u><b>Keep</b><img src="https://w7.pngwing.com/pngs/466/464/png-transparent-bowser-new-super-mario-bros-2-mario-heroes-super-mario-bros-fictional-character.png" alt="" heigh="200px" width='200px' /><b>....ing</b></u>
            
            <br />

            <Link to='/'>Back To Home</Link>
        </>
    )
}