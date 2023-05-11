import './Home.css'
import Dashboard from '../components/blog/Dashboard'

const Home = () => {
    return(
        <div className="homeWrapper">
            {/* <h1>This is where the Cards. Blog posts will go</h1> */}
            <Dashboard />
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.name}</h2>
                        <p>{post.message}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Home