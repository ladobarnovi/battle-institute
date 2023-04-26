$base-color:<template>
  <div class="card-list">
    <h2 class="text-2xl font-bold text-white mb-4">{{ title }}</h2>
    <div class="flex gap-4">
      <Card
        class="flex-grow"
        v-for="(item, index) in arrCardsData"
        :data="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ICardDataProp } from "~/components/Card/Card.vue";

export default {
  name: "CardList",
  props: {
    title: {
      type: String,
      required: true
    },
    arrCardsData: {
      type: Array as PropType<ICardDataProp[]>,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
