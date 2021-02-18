<template>
  <vs-col
    v-if="
      Boolean(Number(couple.even)) === even && couple.day === parseInt(day, 10)
    "
    lg="4"
    xs="12"
  >
    <vs-card type="5">
      <template #title>
        <h3>{{ couple.title }}</h3>
      </template>
      <template #img>
        <img :src="couple.image" alt="" height="300" width="300" />
      </template>
      <template #text>
        <p>Преподаватель: {{ couple.name }}</p>
      </template>
      <template #interactions>
        <vs-tooltip dark>
          <vs-button circle danger icon>
            <i class="bx bxs-school"></i>
            {{ couple.corps }}
          </vs-button>
          <template #tooltip> Корпус </template>
        </vs-tooltip>
        <vs-tooltip dark>
          <vs-button circle icon warn>
            <i class="bx bx-cabinet"></i>
            {{ couple.auditory }}
          </vs-button>
          <template #tooltip> Аудитория </template>
        </vs-tooltip>
        <vs-tooltip dark>
          <vs-button circle dark icon>
            <i class="bx bx-time"></i>
            {{ couple.time }}
          </vs-button>
          <template #tooltip> Время </template>
        </vs-tooltip>
      </template>
    </vs-card>
  </vs-col>
</template>

<script>
export default {
  name: 'Card',
  props: {
    even: {
      type: Boolean,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    couple: {
      type: Object,
      required: true,
    },
  },
}
</script>
