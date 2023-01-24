import { Outlet, Link } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <Link to={`/`}>
                <h1>CoinCrowd</h1>
            </Link>
            <p>Data-driven insights powered by the crowd.</p>
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