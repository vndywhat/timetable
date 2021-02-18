<template>
  <div class="grid">
    <vs-row justify="center">
      <vs-col w="6">
        <div class="center">
          <vs-select v-model="select" placeholder="Выбери день недели" dark>
            <vs-option label="Понедельник" value="1"> Понедельник </vs-option>
            <vs-option label="Вторник" value="2"> Вторник </vs-option>
            <vs-option label="Среда" value="3"> Среда </vs-option>
            <vs-option label="Четверг" value="4"> Четверг </vs-option>
            <vs-option label="Пятница" value="5"> Пятница </vs-option>
            <vs-option label="Суббота" value="6"> Суббота </vs-option>
          </vs-select>
        </div>
      </vs-col>
      <vs-col xs="4" lg="2" sm="2">
        <div class="center con-switch">
          <vs-switch v-model="even" dark>
            <template #off>
              <i class="bx bx-x"></i>
              Нечетная
            </template>
            <template #on>
              <i class="bx bx-check"></i>
              Четная
            </template>
          </vs-switch>
        </div>
      </vs-col>
    </vs-row>
    <hr />
    <vs-row>
      <Card
        v-for="c in couples"
        :key="c.id"
        :couple="c"
        :day="select"
        :even="even"
      />
    </vs-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '../components/Content/Card'

export default {
  components: { Card },
  async fetch({ store, error }) {
    try {
      if (store.getters.getCouples.length === 0)
        await store.dispatch('getCouples')
    } catch (e) {
      error(e)
    }
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      couples: 'getCouples',
    }),
    select: {
      get() {
        return this.$store.state.select
      },
      set(value) {
        this.$store.dispatch('setDay', value)
      },
    },
    even: {
      get() {
        return this.$store.state.even
      },
      set() {
        this.$store.dispatch('toggleEven')
      },
    },
  },
  head() {
    return {
      title: 'Расписание',
    }
  },
}
</script>

<style scoped>
body,
button,
input {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
