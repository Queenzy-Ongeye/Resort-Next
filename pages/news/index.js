import { Fragment } from 'react';

function NewsPage() {
    return (
        <Fragment>
            <h1>News page</h1>
            <ul>
                <li><a href="/news/next">Blogs</a></li>
                <li><a href="/news/pop">Headlines</a></li>
                <li>Articles</li>
            </ul>
        </Fragment>
    )

}
export default NewsPage;  