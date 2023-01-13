<template>
  <div>
    <section>
      <div class="section-container section-title-distance">
        <div class="text-center">
          <h1 class="heading-big mx-auto mb-5 max-w-[1490px] lg:mb-8">
            PoMo — это сообщество людей, влюблённых в своё дело
          </h1>
          <p class="mx-auto max-w-[650px] text-sm text-grey">
            Идея открытия PoMo родилась с мечты о создании уникального
            дизайнерского пространства, где будут представлены коллекции мебели
            и предметов декора от ведущих мировых производителей
          </p>
        </div>
      </div>
    </section>
    <Marquee />
    <section>
      <div class="relative">
        <div class="banner h-[450px] w-full lg:h-auto">
          <img
            src="~/assets/img/bg/about-banner.png"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="page-icon p absolute left-0 top-0">
          <img src="~assets/img/icons/p.svg" alt="" />
        </div>
        <div
          class="page-icon big-o absolute -bottom-14 right-5 lg:-bottom-20 lg:right-20 2xl:-bottom-40"
        >
          <img src="~assets/img/icons/big-o.svg" alt="" />
        </div>
      </div>
    </section>
    <AboutUs />
    <OurMission />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
