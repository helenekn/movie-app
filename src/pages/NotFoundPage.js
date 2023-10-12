import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <main className="container main">
            <h2>this page does not exist</h2>
            <div>
                {/* <a href='/'>Home page</a> */}
                <Link to='/'>Home page</Link>
            </div>
        </main>
    )
}

export { NotFoundPage };