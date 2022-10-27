import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ADICIONA_TAREFA, ALTERA_PROJETO, ATUALIZA_TAREFA, EXCLUIR_PROJETO, REMOVE_TAREFA } from "./tipo-mutacoes";

interface Estado {
  projetos: IProjeto[],
  tarefas: ITarefa[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    tarefas: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      }

      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(p => p.id === projeto.id);
      state.projetos[index] = projeto;
    },
    [EXCLUIR_PROJETO](state, id: string){
      state.projetos = state.projetos.filter(p => p.id != id);
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa){
      tarefa.id = new Date().toISOString();
      state.tarefas.push(tarefa);
    },
    [ATUALIZA_TAREFA](state, tarefa: ITarefa){
      const index = state.tarefas.findIndex(t => t.id === tarefa.id);
      state.tarefas[index] = tarefa;
    },
    [REMOVE_TAREFA](state, id: string){
      state.tarefas = state.tarefas.filter(t => t.id === id);
    }
  }
})


export function useStore() : Store<Estado> {
  return vuexUseStore(key)
}