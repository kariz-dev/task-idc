<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="@/assets/logo.png" width="28px" alt="" srcset="">
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#discover">Discover</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#register">Register</a>
            </li>
          </ul>
          <form class="d-flex ms-3">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-secondary" type="submit">
              <b-icon icon="search"></b-icon>
            </button>
          </form>
        </b-collapse>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  .container {
    .show {
      margin: 10px 0px;
    }

    .navbar-brand {
      color: red;
    }
    .navbar-nav {
      .nav-item {
        .nav-link {
          padding-right: 30px;
          padding-left: 30px;
          border-radius: 20px;

          @media screen and (max-width: 600px) {
            padding-right: 12px;
            padding-left: 12px;
            border-radius: 6px;
          }
        }
        .active {
          background: #c5c5c5;

          // @media screen and (max-width: 600px) {
          //   background: ;
          // }
        }
      }
    }
    form {
      @media screen and (max-width: 600px) {
        margin: 0px !important;
      }
    }
  }
}
</style>