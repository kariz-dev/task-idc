<template>
  <div id="discover">

    <div class="container">
      <div data-aos="slide-up" data-aos-easing="ease" data-aos-delay="300" class="header text-center">
        <b-icon icon="easel" font-scale="5"></b-icon>
        <h2>
          <b>Discover</b> <br />
          BOOKED TOOL
        </h2>
      </div>
      <div class="img" data-aos="zoom-in" data-aos-delay="500">
        <img src="@/assets/discover-img.jpg" alt="" />
      </div>

      <b-tabs content-class="mt-3" fill align="center">
        <b-tab title="Discover A" active>
          <p>{{ loremA }}</p>
        </b-tab>
        <b-tab title="Discover B">
          <p>{{ loremB }}</p>
        </b-tab>
        <b-tab title="Discover C">
          <p>{{ loremC }}</p>
        </b-tab>
        <b-tab title="Discover D">
          <p>{{ loremD }}</p>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Discover",
  data() {
    return {
      loremA: `Discover A is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
      loremB: `Discover B is centuries dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
      loremC: `Discover C is scrambled dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`,
      loremD: `Discover D is typesetting dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.`
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-success']
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#discover {
  .container {
    .header {
      margin-top: 40px;
    }

    .img {
      display: flex;
      justify-content: center;
      margin: 20px auto;

      img {
        background-size: cover;
        width: 500px;
        height: 100%;
        border-radius: 10px;

        @media screen and (max-width: 600px) {
          width: 260px;
          height: 100%;
        }
      }
    }
    
    .tabs {
      max-width: 500px;
      margin: 0 auto;
    }
  }
}


</style>