import './notfoundpage.css';

function NotFoundPage() {
  return (
    <section className="notfound__wrapper">
      <div className="emoji__rain">
        <span>🍿</span>
        <span>🎬</span>
        <span>🍿</span>
        <span>🎬</span>
        <span>🎬</span>
        <span>🍿</span>
        <span>🍿</span>
        <span>🎬</span>
        <span>🍿</span>
        <span>🎬</span>
      </div>
      <h1 className="notfound__title">404</h1>
      <p>The page you are looking for was not found 😢</p>
      <a href="/" className='notfound__link'>Back to home page</a>
    </section>
  )
}

export default NotFoundPage;