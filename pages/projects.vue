<template>
  <v-container fluid>
    <div class="title text-center">
      <span>
        На данной странице представлены мои проекты, которые я успел и имел
        возможность добавить в открытый репозиторий
      </span>
    </div>
    <v-row>
      <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6">
        <div>
          <v-card class="mx-auto card-item">
            <v-carousel
              v-if="project.images.length > 1"
              height="20vw"
              hide-delimiters
            >
              <v-carousel-item
                v-for="image in project.images"
                :key="image"
                max-height="20vw"
              >
                <v-img c :src="'/img/' + image" />
              </v-carousel-item>
            </v-carousel>
            <v-img
              v-else
              contain
              height="20vw"
              :src="'/img/' + project.images[0]"
            />
            <v-card-title style="line-height: 1em">{{
              project.title
            }}</v-card-title>
            <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
            <v-card-actions>
              <v-btn
                v-if="project.link"
                color="orange lighten-2"
                text
                @click="followTheLink(project.link)"
                >Перейти в репозиторий проекта</v-btn
              >
              <v-spacer class="mt-auto" />
              <v-btn icon @click="showPortfolio = !showPortfolio">
                <v-icon>{{
                  showPortfolio ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-spacer />
            <v-expand-transition>
              <div v-show="showPortfolio">
                <v-divider></v-divider>

                <v-card-text>
                  {{ project.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projectsList from '~/util/projectsList.js'

export default {
  middleware: 'authorized',
  data() {
    return {
      projects: projectsList,
      showAdmin: false,
      showPortfolio: false,
    }
  },
  methods: {
    followTheLink(link) {
      window.location.href = link
    },
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 2%;
}
.card-item {
  height: 100%;
}
@media screen and (max-width: 900px) {
  .title {
    line-height: 0.7em;
  }
  span {
    font-size: 80%;
  }
}
</style>
