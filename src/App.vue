<template>
  <main @click="showProfileDropdown = false">
    <div class="nav-container">
      <nav>
        <h2>Elden Ring Boss Tracker</h2>
        <div v-if="password.length > 0" @click="openDropdown($event)" class="profile-button">
          <IconProfile />
        </div>
      </nav>
      <div v-if="showProfileDropdown" class="profile-dropdown" @click="cancelClick($event)">
        <span>Password:</span>
        <code>{{ password }}</code>
        <button @click="logout">Log out</button>
      </div>
    </div>
    <div class="main-container">
      <LoginScreen @setPassword="loadAreas($event, searchText)" v-show="password.length === 0" />
      <div class="input-container" v-show="password.length > 0">
        <input type="text" v-model="searchText" placeholder="Search here" />
      </div>
      <div class="progress-bar-container" v-show="password.length > 0">
        <ProgressBar
          v-show="allBosses > 0"
          class="progress-bar"
          :current="defeatedBosses"
          :max="allBosses"
        ></ProgressBar>
      </div>
      <div class="areas-container" v-show="password.length > 0">
        <AreaList
          :areas="areas"
          :boss-counts="bossCounts"
          @boss-defeated="onBossDefeated($event)"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import AreaList from './components/AreaList.vue'
import IconProfile from './components/icons/IconProfile.vue'
import LoginScreen from './components/LoginScreen.vue'
import ProgressBar from './components/ProgressBar.vue'
import { CookieManager } from './util/cookie-manager'
import { BossesApi, type Area, type Boss } from './util/bosses-api'

type Data = {
  password: string
  originalAreas: Area[]
  areas: Area[]
  bossCounts: { [location: string]: number }
  searchText: string
  bossesApi: BossesApi | undefined
  showProfileDropdown: boolean
}

export default {
  data(): Data {
    return {
      password: '',
      originalAreas: [],
      areas: [],
      bossCounts: {},
      searchText: '',
      bossesApi: undefined,
      showProfileDropdown: false,
    }
  },
  methods: {
    async loadAreas(password: string, searchText: string) {
      this.password = password
      this.bossesApi = new BossesApi(password)
      this.originalAreas = await this.bossesApi.getAreas()
      this.bossCounts = {} as { [location: string]: number }
      for (const area of this.originalAreas) {
        this.bossCounts[area.name] = area.bosses.length
      }
      this.areas = this.search(this.originalAreas, searchText)
    },
    async onBossDefeated(boss: Boss) {
      const ownBoss = this.areas.flatMap((area) => area.bosses).find((b) => b.id === boss.id)
      if (ownBoss) {
        ownBoss.defeated = !boss.defeated
        await this.bossesApi?.saveBossDefeated(ownBoss)
      }
    },
    cancelClick(event: MouseEvent) {
      event.stopPropagation()
    },
    openDropdown(event: MouseEvent) {
      this.showProfileDropdown = true
      event.stopPropagation()
    },
    logout() {
      if (
        confirm(
          'Are you sure you want to log out? Make sure you note your password, or it will be lost.',
        )
      ) {
        CookieManager.deletePasswordCookie()
        window.location.reload()
      }
    },
    search(originalAreas: Area[], searchText: string): Area[] {
      let areas = originalAreas.map(
        (area) => ({ name: area.name, bosses: area.bosses.slice() }) as Area,
      )
      if (searchText === undefined || searchText.length === 0) {
        return areas
      }
      const searchPattern = new RegExp(`\\b${searchText.toLowerCase().trim()}`)
      for (const area of areas) {
        if (searchPattern.test(area.name.toLowerCase())) {
          continue
        }
        area.bosses = area.bosses.filter((boss) => searchPattern.test(boss.name.toLowerCase()))
      }
      areas = areas.filter(
        (area) => searchPattern.test(area.name.toLowerCase()) || area.bosses.length > 0,
      )
      return areas
    },
  },
  mounted() {
    window.setInterval(() => {
      if (this.password.length > 0) {
        this.loadAreas(this.password, this.searchText)
      }
    }, 10_000)
  },
  components: {
    LoginScreen,
    AreaList,
    ProgressBar,
    IconProfile,
  },
  computed: {
    allBosses(): number {
      return this.originalAreas.flatMap((area) => area.bosses).length
    },
    defeatedBosses(): number {
      return this.originalAreas.flatMap((area) => area.bosses).filter((boss) => boss.defeated)
        .length
    },
  },
  watch: {
    searchText(toSearch: string) {
      this.areas = this.search(this.originalAreas, toSearch)
    },
  },
}
</script>

<style scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

nav {
  background-color: #0f0f0f;
  width: 100%;
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  z-index: 100;
  align-items: center;
  font-size: 12px;
}

nav h2 {
  width: 100%;
}

button {
  cursor: pointer;
}

nav button {
  width: 100px;
  height: 100%;
  margin-right: 10px;
}

.profile-dropdown {
  position: absolute;
  width: min(150px, 50%);
  border-radius: 4px;
  padding: 4px;
  padding-bottom: 8px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f0f;
}

header {
  line-height: 1.5;
}

input {
  width: min(700px, 90%);
  height: 35px;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 40px;
  font-size: 16px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.areas-container {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

main {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main-container {
  margin-top: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;
}

.progress-bar {
  width: 90%;
  margin-bottom: 15px;
}

.progress-bar-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.profile-button {
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  cursor: pointer;
}
</style>
