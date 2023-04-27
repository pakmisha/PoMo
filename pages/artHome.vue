<template>
  <div>
    <section>
      <div class="section-container section-title-distance">
        <div class="mb-10 text-center">
          <h1 class="heading-big mb-5 lg:mb-8">Искусство для Вашего дома</h1>
          <p class="heading-sub uppercase">
            Посмотрите последние картины, добавленные в коллекцию
          </p>
        </div>
        <div class="flex justify-center">
          <UILink link="/art" class="btn-primary">перейти в каталог</UILink>
        </div>
      </div>
    </section>
    <div class="w-full">
      <img src="~/assets/img/art/banner.png" class="w-full" alt="" />
    </div>
    <section>
      <div class="section-distance section-container">
        <div
          class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
        >
          <p class="heading-sub">[наши картины]</p>
          <div class="my-3 h-16 w-px bg-dark-blue"></div>
          <h2 class="heading-primary mb-6 lg:mb-10">
            Мы постоянно пополняем коллекцию. Оставайтесь в курсе событий
          </h2>
        </div>
        <ArtSwPictures />
      </div>
    </section>
    <ArtEvents />
    <section>
      <div class="section-distance">
        <div class="relative h-[800px] w-full">
          <img
            src="~/assets/img/art/about.png"
            class="h-full w-full object-cover"
            alt=""
          />
          <div
            class="absolute left-1/2 top-1/2 mx-auto flex max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col items-center py-20 text-center"
          >
            <p class="heading-sub">[о нас]</p>
            <div class="my-3 h-16 w-px bg-dark-blue"></div>
            <h2 class="heading-primary mb-6 lg:mb-10">
              POMO ART GALLERY — это арт-пространство, где представлены объекты
              искусства
            </h2>
            <p class="mx-auto max-w-[500px] text-center text-sm">
              «Философия PoMo отражает основную мысль постмодернизма: свобода
              самовыражения и индивидуализм»
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
