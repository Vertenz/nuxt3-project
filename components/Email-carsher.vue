<template>
    <div class="carsher-email">
      <Menu />
      <h1>email</h1>
      <div class="help" v-show="show">
        <h2>{{ titleHelp }}</h2>
        <p>{{ descriptionHelp }}</p>
        <div class="help__btn-block">
          <div class="btn-block__wrap" @click="show = false">
                <div class="spin"></div>
                <div class="btn-block__btn">Закрыть</div>
          </div>
        </div>
      </div>
      <div class="btn-block btn-block_column">
            <div class="btn-block__wrap" @click="showHelp('create')">
                <div class="spin"></div>
                <div class="btn-block__btn">Завести дело в базе</div>
            </div>
            <img src="../static/arrow.svg" alt="следующий шаг" class="btn-block__arrow">
            <div class="btn-block__wrap" @click="showHelp('upload')">
                <div class="spin"></div>
                <div class="btn-block__btn">Загрузить письмо</div>
            </div>
            <img src="../static/arrow.svg" alt="следующий шаг" class="btn-block__arrow">
            <div class="btn-block__wrap" @click="showHelp('inquiry')">
                <div class="spin"></div>
                <div class="btn-block__btn">Запросить оригиналы</div>
            </div>
            <img src="../static/arrow.svg" alt="следующий шаг" class="btn-block__arrow">
            <div class="btn-block__wrap" @click="showHelp('closeDock')">
                <div class="spin"></div>
                <div class="btn-block__btn">Закрыть <b>Доки от кл</b></div>
            </div>
            <img src="../static/arrow.svg" alt="следующий шаг" class="btn-block__arrow">
            <div class="btn-block__wrap" @click="showHelp('closeCall')">
                <div class="spin"></div>
                <div class="btn-block__btn">Закрыть <b>Отзвон</b></div>
            </div>
      </div>
    </div>
</template>

<script setup>
let show = ref(false);
let titleHelp = ref('');
let descriptionHelp = ref('');

const arrHelp = new Map([
  ['create', {
    title: 'Завести дело',
    description: 'LoremLoremLoremL  mLoremL oremLoremLoremLoremLoreLoremLo remLoremLor emLoremLoLore mLoremLoremLorem LoremLoremLo reemLorem'
  }],
  ['upload', {
    title: 'Загрузить письмо',
    description: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem'
  }],
  ['inquiry', {
    title: 'Запросить оригиналы',
    description: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem'
  }],
  ['closeDock', {
    title: 'Закрыть Доки от кл',
    description: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem'
  }],
  ['closeCall', {
    title: 'Закрыть Отзвон',
    description: 'LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem'
  }]
]);

function showHelp(name) {
  show.value = true;
  titleHelp.value = arrHelp.get(name).title;
  descriptionHelp.value = arrHelp.get(name).description;
}

</script>

<style lang="scss" scoped>
.carsher-email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--padding) calc(var(--padding) + 3vw);
    &__description {
        margin-bottom: 1rem;
    }
}

.btn-block_column {
  flex-direction: column;
}

.help {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  min-height: 50vh;
  background-color: var(--attention-color);
  padding: var(--padding);
  position: absolute;
  z-index: 2;
  box-shadow: 3px 5px 5px black, -3px 5px 5px black, 3px -5px 5px black;
}
</style>