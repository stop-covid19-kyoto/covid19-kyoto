<template>
  <div>
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 陽性者数 -->
      <confirmed-cases-number-card />
      <!-- 検査実施数 -->
      <tested-number-card />
      <!-- 陽性者の属性 -->
      <!-- <confirmed-cases-attributes-card /> -->
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardRow from '@/components/cards/CardRow.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'

export default Vue.extend({
  components: {
    CardRow,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    TestedNumberCard,
    // ConfirmedCasesAttributesCard,
  },
})
</script>

<style lang="scss" scoped>
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
</style>
