<template>
  <div>
    <site-top-upper />
    <component :is="items[0].component" />
    <!--<v-tabs v-model="tab" hide-slider>
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        v-ripple="false"
        :href="`#tab-${i}`"
        @click="change"
      >
        <v-icon class="TabIcon">
          mdi-chart-timeline-variant
        </v-icon>
        {{ item.label }}
      </v-tab>
      <v-tabs-items v-model="tab" touchless>
        <v-tab-item v-for="(item, i) in items" :key="i" :value="`tab-${i}`">
          <component :is="item.component" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteTopUpper from '@/components/SiteTopUpper.vue'
// import CardsMonitoring from '@/components/CardsMonitoring.vue'
// import CardsReference from '@/components/CardsReference.vue'
import CardsKyoto from '@/components/CardsKyoto.vue'
import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus.ts'
export default Vue.extend({
  components: {
    SiteTopUpper,
    // CardsMonitoring,
    // CardsReference,
    CardsKyoto,
  },
  data() {
    return {
      tab: null,
      items: [
        // { label: this.$t('モニタリング項目'), component: CardsMonitoring },
        // { label: this.$t('その他 参考指標'), component: CardsReference },
        { label: `京都府内の最新感染状況`, component: CardsKyoto },
      ],
    }
  },
  methods: {
    change() {
      EventBus.$emit(TOGGLE_EVENT)
    },
  },
})
</script>

<style lang="scss">
.v-slide-group__content {
  border-bottom: 1px solid $gray-2;
  background: $gray-5;
}
.v-tab {
  top: 1px;
  margin: 0 8px;
  border-style: solid;
  border-radius: 4px 4px 0 0;
  font-weight: bold !important;
  @include font-size(16, true);
  &:focus {
    outline: dotted $gray-3 1px;
  }
  &--active {
    color: $gray-2 !important;
    background: $gray-5;
    border-color: $gray-2 $gray-2 $gray-5 $gray-2;
    border-width: 1px 1px 2px 1px;
    &::before {
      background-color: transparent;
    }
  }
  &:not(.v-tab--active) {
    color: $green-1 !important;
    background: $white;
    border-color: $green-1 $green-1 $gray-2 $green-1;
    border-width: 1px;
    &:hover {
      color: $white !important;
      background: $green-1;
    }
    .TabIcon {
      color: inherit !important;
    }
  }
}
.v-tabs-items {
  background-color: transparent !important;
}
@function px2vw($px, $vw: 768) {
  @return $px / $vw * 100vw;
}
@include lessThan($medium) {
  .v-slide-group__content {
    width: 100%;
  }
  .v-tab {
    font-size: px2vw(16) !important;
    font-weight: normal !important;
    flex: 1 1 auto;
    width: 100%;
    padding: 0 8px !important;
  }
}
@include lessThan($small) {
  .v-tab {
    font-size: px2vw(20, 600) !important;
    padding: 0 4px !important;
  }
  .TabIcon {
    font-size: px2vw(24, 600) !important;
  }
}
</style>