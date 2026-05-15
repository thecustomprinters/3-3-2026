<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Home Page</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    }

    body{
      background:#f4f4f4;
      color:#333;
    }

    header{
      background:#111827;
      color:white;
      padding:20px 50px;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    .logo{
      font-size:24px;
      font-weight:bold;
    }

    nav a{
      color:white;
      text-decoration:none;
      margin-left:20px;
      transition:0.3s;
    }

    nav a:hover{
      color:#38bdf8;
    }

    .hero{
      height:90vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      background:linear-gradient(to right,#0f172a,#1e293b);
      color:white;
    }

    .hero h1{
      font-size:60px;
      margin-bottom:20px;
    }

    .hero p{
      font-size:20px;
      margin-bottom:30px;
    }

    .btn{
      padding:12px 30px;
      border:none;
      background:#38bdf8;
      color:white;
      font-size:18px;
      cursor:pointer;
      border-radius:8px;
      transition:0.3s;
    }

    .btn:hover{
      background:#0284c7;
    }

    .features{
      padding:60px 50px;
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
      gap:20px;
    }

    .card{
      background:white;
      padding:30px;
      border-radius:12px;
      box-shadow:0 5px 10px rgba(0,0,0,0.1);
      text-align:center;
    }

    .card h3{
      margin-bottom:15px;
    }

    footer{
      background:#111827;
      color:white;
      text-align:center;
      padding:20px;
      margin-top:30px;
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">MyWebsite</div>

    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Welcome to My Website</h1>
    <p>Create amazing websites with HTML, CSS & JavaScript</p>

    <button class="btn" onclick="showMessage()">
      Get Started
    </button>
  </section>

  <section class="features">

    <div class="card">
      <h3>Fast</h3>
      <p>Optimized and responsive design for all devices.</p>
    </div>

    <div class="card">
      <h3>Modern</h3>
      <p>Clean UI with beautiful layout and animations.</p>
    </div>

    <div class="card">
      <h3>Easy</h3>
      <p>Simple and beginner-friendly code structure.</p>
    </div>

  </section>

  <footer>
    <p>© 2026 MyWebsite | All Rights Reserved</p>
  </footer>

  <script>
    function showMessage() {
      alert("Welcome to the Homepage!");
    }
  </script>

</body>
</html>
