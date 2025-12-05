import "./space.css"

function Space({id, name, status}: {id?: string, name?: string, status?: boolean}) {
    return <>
        <div id="space-box">Space Component {id}, {name}, {status}</div>
    </>
}

export default Space
