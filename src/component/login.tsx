import { useFormStatus } from "react-dom";
import { loginUser } from "../actions/login.tsx";
function Login() {

    let username = "";
    let password = "";

    /** Submit Button Component */
    function Submit() {
        const { pending } = useFormStatus();
        return <>
            <button type="submit" disabled={pending}>
                {pending ? "Logging In..." : "Log In"}
            </button>
        </>
    }

    return <>
        <form action={() => loginUser(username, password)}>
            <h3>Log In to continue</h3>
            <input type="text" placeholder="Username" onChange={e => username = e.target.value} />
            <input type="password" placeholder="Password" onChange={e => password = e.target.value} />
            <Submit />
        </form>
    </>

}

export default Login;
