<template>
  <div id="hero" :style="cssProps">
    <div class="container">
      <div class="row">
        <div class="col-md order-2 order-sm-1">
          <div class="hero-content">
            <div class="hero-text">
              <strong>Booked Tool</strong>
              enables you to create Interactive Advertisement
            </div>
            <a href="#" type="button" class="btn btn-primary">What is it?</a>
          </div>
        </div>
        <div class="col-md order-1 order-sm-2">
          <img src="@/assets/hero-img.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      cssProps: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.50),
    rgba(0, 0, 0, 0.80)), url(${require("@/assets/bg-hero.jpg")})`,
        backgroundSize: "cover",
        padding: "5% 0px",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#hero {
  height: 75vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    height: 95vh;
  }

  .container {
    .row {
      .col-md {
        display: flex;
        align-items: center;

        .hero-content {
          color: #eeeeee;

          @media only screen and (max-width: 600px) {
            text-align: center;
            margin: 0 auto;
          }

          .hero-text {
            margin-bottom: 20px;
            width: 300px;

            strong {
              font-size: 20px;
            }
          }

          a {
            padding: 10px 30px;
            border-radius: 10px;
          }
        }

        img {
          height: 300px;
          width: 400px;
          border-radius: 16px;
          border: 2px solid #fff;

          @media only screen and (max-width: 768px) {
            height: 200px;
            width: 300px;
            margin: 20px auto;
          }
        }
      }
    }
  }
}
</style>