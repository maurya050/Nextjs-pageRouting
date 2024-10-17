import { useRouter } from "next/router";

function ClientProjectPage(){

    const router = useRouter();
    console.log(router.query);

    const loadProjecthandler = () =>{
        router.push('/clients/shiva/project1');
    }
    return (
        <div>
            <h1>The projects of the given Client</h1>
            <button onClick={loadProjecthandler}>Load project A</button>
        </div>
    )
}

export default ClientProjectPage;