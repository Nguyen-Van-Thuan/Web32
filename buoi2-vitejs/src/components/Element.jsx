
const Element = ({ user }) => {
    // console.log(user, 'user')

    return (
        <>
            {user.map((item) => {
                console.log(item, 'item');
                return (
                    <div key={item.id}>
                        <h1 >{item.name}</h1>
                        <h1>{item.id}</h1>
                    </div>

                )
            })}
        </>

    )
}

export default Element