<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <Box v-if="listaEstaVazia">
          Você não está muito produtivo hoje :c
        </Box>
      </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from '../components/Box.vue';
import ITarefa from "../interfaces/ITarefa";
import { useStore } from "@/store";
import { ADICIONA_TAREFA } from "@/store/tipo-mutacoes";

export default defineComponent({
  name: 'Tarefas',
  components: { Formulario, Tarefa, Box },
  setup(){
    const store = useStore()
    return {
      store,
      tarefas: computed(() => store.state.tarefas)
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.commit(ADICIONA_TAREFA, tarefa);
    }
  },
  computed: {
    listaEstaVazia () : boolean { 
      return this.tarefas.length === 0
    }
  }
});

</script>