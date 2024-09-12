const Navbar = () => {
  let isLogin =localStorage.getItem('isLogin') || false
  let username=localStorage.getItem('username')
  return `
    <nav class="navbar navbar-expand-lg bg-dark">
   <div class="container-fluid">
         <a class="navbar-brand text-light" href="/index.html">Navbar</a>
        <button class="navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon bg-white"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <a class="nav-link active text-light" aria-current="page" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
           <a class="nav-link active text-light" aria-current="page" href="/pages/product.html">Product</a>
        </li>
       <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/pages/addproduct.html">AddProduct</a>
            </li>
        <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/pages/cart.html">Cart</a>
            </li>
               <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/pages/login.html">${isLogin ? "Logout" : "Login"}</a>
            </li>
             <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/pages/signup.html">${isLogin ? username : "signup"}</a>
            </li>
      </ul>
      <form class="d-flex" role="search" id="searching">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    `
}
export default Navbar