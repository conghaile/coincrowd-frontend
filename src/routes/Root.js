import { Outlet, Link } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <h1>CoinCrowd</h1>
            <p>Epic deep silicon valley ass tagline.</p>
            <div class="links">
                <Link to={`/about`}>About</Link>
                <Link to={`/`}>Coins</Link>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}

export default Root