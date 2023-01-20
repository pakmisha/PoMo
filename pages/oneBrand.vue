<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        Camerich
      </h1>
    </div>
    <section>
      <div class="section-container">
        <div
          class="flex flex-col justify-between border-t border-dark pt-9 lg:flex-row"
        >
          <div class="mb-5 w-full lg:mb-0 lg:w-2/5">
            <h2 class="heading-secondary mb-10">
              Camerich — мировой бренд, представленный в шестидесяти странах
              мира
            </h2>
            <button
              class="btn-primary"
              @click.prevent="$nuxt.$emit('open-modal', 'request')"
            >
              Оставить заявку
            </button>
          </div>

          <div class="plaintext w-full lg:w-2/5">
            Головной офис находится в Лондоне. Производство было налажено
            в 1997 году на базе фабрики Beijing Triumph Furniture, которая
            до этого производила мебель для известных итальянских марок мебели.
            Сейчас на площади в 10 000 квадратных метров размещается новейшее
            производственное оборудование, на котором производится роскошная
            мебель.
            <br />
            <br />
            Глобальный охват позволяет Camerich использовать самое лучшее сырьё
            и привлекать самых лучших мастеров для создания продуктов, которые
            прослужат долгое время.
            <br />
            <br />

            Продукция Camerich насчитывает более 100 видов мебели для гостиной,
            спальни, кухни и кабинета. Мебель Camerich широко используется
            в частных квартирах и домах, отелях, ресторанах, офисах и в других
            типах помещений в Европе, Америке, Азии и Австралии.
          </div>
        </div>
      </div>
    </section>
    <div class="section-distance">
      <PictureDetails />
    </div>
    <div class="section-distance section-container">
      <ProductsWrapper />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
