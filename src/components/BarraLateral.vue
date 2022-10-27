<template>
  <header>
      <h1>
        <img src="../assets/logo.png" alt=""/>
      </h1>
      <button class="button" @click="alterarTema">
        {{ textoBotao }}
      </button>
      <nav class="panel mt-5">
        <ul>
          <li v-for="(route, index) in rotasOrdenadas" :key="index">
              <router-link :to="route.path" class="link">
                <i :class="route.meta?.icon"></i>{{route.meta?.label}}
              </router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router';
import { routes } from '../router';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    }

  },
  computed: {
    textoBotao () {
      return `${this.modoEscuroAtivo ? 'Desativar' : 'Ativar'} modo escuro`
    },
    rotasOrdenadas () : RouteRecordRaw[] {
      return routes.filter(route => !route.meta?.hide).sort()
    }
  },
  methods: {
    alterarTema () {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})

</script>


<style scoped>
header {
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px){
  header{
    padding: 2.5rem;
    height: auto;
  }
}

.panel li{
  margin: 8px 0;
}
.link{
  color: #fff;
}

.link:hover,
.link.link-router-active{
  color: #faf0ca;
}
</style>