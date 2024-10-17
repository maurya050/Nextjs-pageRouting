import Link from "next/link";

function ClientPage(){

    const clients = [
        { id: '1', name: "shivam"},
        { id: '2', name: "shiva"},

    ]
    return (
        <div>
            <h1>The Client Page</h1>

            <ul>
                {
                    clients.map(client =>{
                        return (
                            <li key={client.id}> 
                                <Link href={{pathname: 'clients/[id',
                                    query: {id: client.id}
                                }}>{client.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ClientPage;