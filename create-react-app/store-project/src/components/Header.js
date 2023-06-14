const Header = ({name, tuoi}) => {
    // console.log(props);//object
    // name = 'WEB 500' kHONG NEN GAN LAI PROPS

    
    return (
        <div className="header">
            <h2>Day la Header cua trang {name} {tuoi}</h2>
        </div>
    )
}

export default Header //export de cho cac trang khac trong ung dung co the import


// STATE