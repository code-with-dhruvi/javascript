const Navbar = () => {
  let isLogin =localStorage.getItem('isLogin') || false
  let username=localStorage.getItem('username')
  return `
     <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/website/index.html">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link active text-light" aria-current="page" href="/website/index.html">Home</a>
             </li>
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/website/pages/product.html">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/website/pages/addproduct.html">AddProduct</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/website/pages/cart.html">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/website/pages/login.html">${isLogin ? "Logout" : "Login"}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" aria-current="page" href="/website/pages/signup.html">${isLogin ? username : "signup"}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `
}
export default Navbar
