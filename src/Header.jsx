const Header = () => {
    const isLogin = true
    return (
        <>
            {isLogin ? (<><button>Doshboard</button><button>Basket</button></>) : <button>Login</button>}
            {isLogin && <button>Cart</button>}
        </>
    )
}
export default Header