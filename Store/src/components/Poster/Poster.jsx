const Poster = () => {
    return (
        <div className="poster">
            <div className="poster__inner">

                <div className="poster__title">BIG SALE 20%</div>
                <div className="poster__subtitle">the bestseller of 2022 </div>
                <div className="poster__text">LENNON r2d2 with NVIDIA 5090 TI</div>
                <button className="poster__shop">Shop Now</button>

            </div>

            <img src="/img/poster.jpg" alt="" className="poster__img" />
        </div>
    );
}
 
export default Poster;