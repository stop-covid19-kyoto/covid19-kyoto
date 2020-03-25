<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new class="mb-4" :items="newsItems" />
    <v-row class="DataBlock">
      <confirmed-cases-details-card />
      <confirmed-cases-number-card />
      <tested-number-card />
      <confirmed-cases-attributes-card />
      <!--<telephone-advisory-reports-number-card />-->
    </v-row>
  </div>
</template>

<i18n src="./index.i18n.json"></i18n>

<script>
import PageHeader from '@/components/PageHeader.vue'
// ニュースはまだ今のところないのでコメントアウト
// import WhatsNew from '@/components/WhatsNew.vue'
import lastUpdate from '@/data/last_update.json'
// import formatGraph from '@/utils/formatGraph'
// import formatTable from '@/utils/formatTable'
// ニュースはまだ今のところないのでコメントアウト
// import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// 電話相談者数の表示は今ないのでコメントアウト
// import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'

export default {
  components: {
    PageHeader,
    // ニュースはまだ今のところないのでコメントアウト
    // WhatsNew,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard
    // 電話相談者数の表示は今ないのでコメントアウト
    // TelephoneAdvisoryReportsNumberCard
  },
  data() {
    // 退院者グラフ
    // const dischargesGraph = formatGraph(Data.discharges_summary.data)
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )

    const data = {
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('京都府内の最新感染動向'),
        date: lastUpdate.last_update
      }
      // ニュースは今のところないのでコメントアウト
      // newsItems: News.newsItems
    }
    return data
  },
  head() {
    return {
      title: this.$t('京都府内の最新感染動向')
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
