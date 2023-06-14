const ListProduct = () => {

  const user = [
    {
      name: "T.Anh",
      id: 1
    },
    {
      name: "Duc",
      id: 2
    },
    {
      name: "Sang",
      id: 3
    }
  ]
  // console.log(user);

  return (
    <div className="wrap-user">
      {user.map((item) => {
        // console.log(item, 'item');
        return (
          <h1 key={item.id}>{item.name}</h1>
        )
      })}
    </div>
  )
}

export default ListProduct