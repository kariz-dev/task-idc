<template>
  <div id="register">
    <div class="container">
      <div class="header text-center pt-4">
        <b-icon data-aos="zoom-in" data-aos-delay="300" icon="clipboard-check" font-scale="5" class="mb-2"></b-icon>
        <h2>
          <b>Get in touch</b>
        </h2>
        <p>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us..
        </p>
      </div>

      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Search..."></b-form-input>
      </b-input-group>

      <div class="row my-3">
        <div class="col-md">
          <div class="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.48386993661!2d106.8241983!3d-6.1814581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd803376576469623!2sIndoChat!5e0!3m2!1sen!2sid!4v1636317422426!5m2!1sen!2sid"
              width="100%"
              height="290px"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="col-md">
          <div class="feedback-form">
            <h3><b>Feedback</b></h3>
            <form class="mt-3">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2 d-flex">
                    <input
                      class="form-control me-2"
                      type="text"
                      placeholder="First"
                    />
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Last"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 mt-2">
                  <button type="submit" class="btn btn-primary">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="scss" scoped>
#register {
  background: #bbbbbb;
  padding-bottom: 30px;
  margin-top: 30px;

  .container {
    .row {
      .col-md {
        .feedback-form {
          @media screen and (max-width: 600px) {
            margin-top: 20px;
          }
          form {
            .row {
              .col-lg-12 {
                .btn {
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
    }
  }
}
</style>