<script lang="ts">
import { defineComponent } from 'vue'
import apiClient from '@/apiClient'

interface Dino {
  id: number
  name: string
  catch: boolean
}

const dinos: Dino[] = []

export default defineComponent({
  name: 'DinosTable',
  data() {
    return {
      dinos,
      dino: { catch: false } as Dino
    }
  },
  methods: {
    async onCatchClick(dino: Dino) {
      try {
        await apiClient.patch(`/dinos/${dino.id}/catch`, dino)
        dino.catch = !dino.catch
      } catch (error: any) {
        console.warn('Error - ', error.response.data.msg)
      }
    },
    async saveDino() {
      const { data } = await apiClient.post('/dinos', this.dino)
      this.dino = { catch: false, name: '', id: 0 }
      this.dinos.push(data)
    }
  },
  computed: {
    dinosLeft(): number {
      return this.dinos.filter((d) => !d.catch).length
    }
  },
  async mounted() {
    try {
      const { data } = await apiClient.get('/dinos')
      this.dinos = data as Dino[]
    } catch (error: any) {
      console.warn('Error - ', error.response.data.msg)
    }
  }
})
</script>

<template>
  <div class="m-3">
    <table class="table table-dark table-hover caption-top">
      <caption>
        Table of Dinos. Left:
        {{
          dinosLeft
        }}
      </caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dino in dinos" :key="dino.id">
          <td class="col-3" :class="{ done: dino.catch }">{{ dino.id }}</td>
          <td class="col-8" :class="{ done: dino.catch }">{{ dino.name }}</td>
          <td class="col-1">
            <button class="btn btn-success" v-on:click="onCatchClick(dino)">Catch</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td><input v-model="dino.name" class="w-100" /></td>
          <td><button class="btn btn-success" v-on:click="saveDino()">Save</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
  color: #ff0000 !important; /* Cor vermelha para texto riscado */
}
</style>
