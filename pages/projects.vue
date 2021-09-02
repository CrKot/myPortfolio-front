<template>
  <v-container fluid>
    <div class="title">
      <h2 class="text-center">
        На данной странице представлены мои проекты, которые я успел и имел
        возможность добавить в открытый репозиторий
      </h2>
    </div>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div>
          <v-card class="mx-auto card-item">
            <v-img height="20vw" contain :src="'/img/catEpic.jpg'" />
            <v-card-title>Текущий проект портфолио</v-card-title>

            <v-card-subtitle
              >В данном проекте я старюсь использовать те техногии, которыми
              владею в конкретный момент времени</v-card-subtitle
            >
            <v-card-actions>
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
                  Проект представляет собой панель администратора состоящую из
                  основной странице со статистикой продаж(таблица и графики),
                  статистикой по чекам и редактором товаров, реализован как
                  мокап для демонстрации ТЗ
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div>
          <v-card class="mx-auto card-item">
            <v-carousel height="auto" hide-delimiters>
              <v-carousel-item
                v-for="n in 4"
                :key="n"
                :src="'/img/admin-panel' + n + '.jpg'"
              />
            </v-carousel>

            <v-card-title>Панель администратора</v-card-title>

            <v-card-subtitle
              >Данный проект был реализован в рамках мокапа для демонстрации
              возможностей заказчику</v-card-subtitle
            >
            <v-spacer class="mt-auto" />
            <v-card-actions>
              <v-btn color="orange lighten-2" text @click="adminPanelUrl"
                >Перейти в репозиторий проекта</v-btn
              >
              <v-spacer />
              <v-btn icon @click="showAdmin = !showAdmin">
                <v-icon>{{
                  showAdmin ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="showAdmin">
                <v-divider></v-divider>

                <v-card-text>
                  Проект представляет собой панель администратора состоящую из
                  основной странице со статистикой продаж(таблица и графики),
                  статистикой по чекам и редактором товаров, реализован как
                  мокап для демонстрации ТЗ
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
export default {
  middleware: 'authorized',
  data() {
    return {
      showAdmin: false,
      showPortfolio: false,
    }
  },
  methods: {
    adminPanelUrl() {
      window.location.href = 'https://github.com/CrKot/admin-panel'
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
  h2 {
    font-size: 85%;
  }
}
</style>
