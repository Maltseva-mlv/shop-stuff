const Header = () => {
    return ( 
        <header className="header">
            <div className="header__inner">
                <div className="logo">
                    <img src="/public/img/logo.svg" alt="" />
                </div>

                <div className="header__menu">
                    <div className="user">
                        <div className="user--circle">
                            <img src="/public/img/user.svg" alt="" />
                        </div>
                        <div className="user--title">Yana Tamkovich</div>
                    </div>

                    <div className="search">
                        <form action="" className="search__form">
                            <img src="/public/img/search.svg" alt="" className="search__icon" />
                            <input placeholder="Найти..." type="text" className="search__input" />
                        </form>
                    </div>

                    <div className="shop">
                        <div className="shop--count">
                            <img src="/public/img/favorite.svg" alt="" className="shop__icon" />

                            <p className="shop--counter">1</p>
                        </div>

                        <div className="shop--count">
                            <img src="/public/img/basket.svg" alt="" className="shop__icon" />
                            <p className="shop--counter">2</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;