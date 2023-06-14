/*=====Kieu 1: if else ngoai======*/

// const Main = () => {
//     const login = false

//     if (login === true) {
//         return (
//             <h1>Day la trang chu</h1>
//         )
//     }else {
//         return <h1>Ban chua dang nhap dau</h1>
//     }

// }

// export default Main

/*======Kieu 2: if-else inline ========*/
// const Main = () => {
//     const login = true

//     return (
//         (login === true) && <h1>Day la trang chu</h1>
//     )
// }

// export default Main

/*=======Kieu 3: Toan tu 3 ngoi========*/

const Main = () => {
    const login = false
    return (
        (login === true) ? (
            <h1>Day la trang chu</h1>
        ) : (
            <h1>Chua dang nhap dau</h1>
        )

    )
}
export default Main

// A ? B : C
// check a dung => B
// Check a sai -=> C