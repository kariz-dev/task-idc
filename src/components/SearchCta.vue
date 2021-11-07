<template>
  <div id="search-cta">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="search-title">
            <p>Please log in to start using</p>
            <h3>Booked Tool</h3>
          </div>
        </div>
        <div class="col-md d-flex align-items-center">
          <div class="input-content d-block d-md-flex">
            <!-- <div class="input-content"> -->
            <input type="email" name="" id="email" placeholder="Email" />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
            />
            <button class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCta",
};
</script>

<style lang="scss" scoped>
#search-cta {
  padding: 20px 0px;
  background: #cacaca;

  .container {
    .row {
      .col-md {
        .search-title {
          p {
            margin: 0px;
          }
        }

        .input-content {
          input {
            margin-right: 10px;
            border-radius: 10px;
            padding: 8px;

            @media only screen and (max-width: 600px) {
              margin-bottom: 10px;
              margin-right: 0px;
              width: 100%;
            }
          }

          button {
            padding: 10px 30px;
            border-radius: 10px;

            @media only screen and (max-width: 600px) {
              width: 100%;
              padding: 10px auto;
            }
          }
        }
      }
    }
  }
}
</style>