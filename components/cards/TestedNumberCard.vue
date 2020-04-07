<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="inspectionsSummary.last_update"
      :comment="
        '※ 3月13日のデータは京都府が1日ごとの実施値の推移を公開していないため、その日までの累計を入力しています。'
      "
      :unit="$t('件.tested')"
      :url="'https://www.pref.kyoto.jp/kentai/corona/pcrkensa.html'"
    />
    <!-- 件.tested = 検査数 -->
  </v-col>
</template>

<script>
import inspectionsSummary from '@/data/inspections_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const inspectionsGraph = formatGraph(inspectionsSummary.data)

    const data = {
      inspectionsSummary,
      inspectionsGraph
    }

    return data
  }
}
</script>
