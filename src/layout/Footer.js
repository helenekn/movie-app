function Footer() {
    return (
        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">SPA Movies from Beetroot</h5>
              <p class="grey-text text-lighten-4">"Through hardship to the stars!"</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © {new Date().getFullYear()} Copyright Movies
          <a class="grey-text text-lighten-4 right" href="#!">Git Repo</a>
          </div>
        </div>
      </footer>
    )
}

export { Footer };