<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <BotaoCronometro @clicado="iniciar" icon="fas fa-play" texto="Play" :desabilitado="cronometroRodando"/>
    <BotaoCronometro @clicado="finalizar" icon="fas fa-stop" texto="Stop" :desabilitado="!cronometroRodando"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from './Cronometro.vue'
import BotaoCronometro from './BotaoCronometro.vue'
export default defineComponent({
  name: "Temporizador",
  emits: ['aoTemporizadorFinalizado'],
  components: {
    Cronometro, BotaoCronometro
  },
  data () {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar() {
      // comecar a contagem
      // 1s = 1000ms
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar() {
      this.cronometroRodando = false
      clearInterval(this.cronometro)
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
    }
  }
});
</script>
