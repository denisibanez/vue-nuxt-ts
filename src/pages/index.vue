<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        vue-nuxt-ts {{ fullName }}
      </h1>
      <h2 class="subtitle">
        My glorious Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Vue, Component } from 'vue-property-decorator'
import Logo from '@/components/Logo'
import Services from '@/services/services'

@Component({
  components: {
    "Logo": Logo
  },

  computed: {
    ...mapGetters<any>({
      list: 'teste/list'
    })
  },

  methods: {
    ...mapActions<any>({
      addList: 'teste/addList'
    })
  }
})
export default class Home extends Vue {
  firtsName: string =  'Denis'
  lastName: string = 'Ibanez'
  services: any

  get fullName(): string {
    return `${this.firtsName} ${this.lastName}`
  }

  created() {
    console.log((this as any).list);
    (this as any).addList({ teste: 'teste param '})
    console.log((this as any).list)
    this.services = new Services()
    this.services.getExample('100/json').then((response: any) => {
      console.log(response.data)
    }).catch((error: any) => {
      console.log(error)
    }).finally(() => {
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
