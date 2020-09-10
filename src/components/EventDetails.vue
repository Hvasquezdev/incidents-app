<template>
  <div class="event-details-wrapper">
    <div class="fixed-wrapper">
      <div class="details-header">
        <h2 class="title">Details</h2>
      </div>

      <base-card class="details-wrapper">
        <div v-if="item && !item.actions[0].comment" class="details-actions">
          <base-button shadow block :disabled="!item" @click="setNoAction">
            No action needed
          </base-button>
          <base-button
            shadow
            block
            color="success"
            :disabled="!item"
            @click="showEventActionDialog = true"
          >
            Take action
          </base-button>
        </div>

        <div class="details-content">
          <base-tab
            :items="tabs"
            :active="activeTab"
            @select="val => (activeTab = val)"
          />

          <div class="content-body">
            <template v-if="activeTab === 1">
              <event-details-list
                v-if="item && item.details"
                :details="item.details"
              />
              <p v-else>
                No details to show
              </p>
            </template>

            <template v-if="activeTab === 2">
              <keep-alive v-if="item && item.location">
                <base-map
                  :latitude="item.location.latitude"
                  :longitude="item.location.longitude"
                />
              </keep-alive>

              <p v-else>
                No map to show
              </p>
            </template>

            <template v-if="activeTab === 3">
              <keep-alive
                v-if="item && item.media && item.media[0].type === 'image'"
              >
                <base-image
                  :has-fullscreen="true"
                  :src="item.media[0].url"
                  :alt="item.type"
                />
              </keep-alive>

              <keep-alive
                v-else-if="item && item.media && item.media[0].type === 'audio'"
              >
                <audio :src="item.media[0].url" controls></audio>
              </keep-alive>

              <p v-else>
                No media to show
              </p>
            </template>
          </div>
        </div>
      </base-card>
    </div>

    <event-action-dialog
      v-if="showEventActionDialog"
      @close="showEventActionDialog = false"
      @success="onActionSuccess"
    />
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard';
import BaseButton from '@/components/BaseButton';
import BaseTab from '@/components/BaseTab';
import BaseMap from '@/components/BaseMap';
import BaseImage from '@/components/BaseImage';
import EventDetailsList from '@/components/EventDetailsList';
const EventActionDialog = () => import('@/components/EventActionDialog');

export default {
  name: 'EventDetails',

  components: {
    BaseCard,
    BaseButton,
    BaseTab,
    BaseMap,
    BaseImage,
    EventDetailsList,
    EventActionDialog
  },

  data() {
    return {
      activeTab: 1,
      tabs: [
        {
          id: 1,
          text: 'Details'
        },
        {
          id: 2,
          text: 'Location'
        },
        {
          id: 3,
          text: 'Media'
        }
      ]
    };
  },

  computed: {
    showEventActionDialog: {
      get() {
        return this.$store.state.dialogs.showEventActionDialog;
      },
      set(val) {
        this.$store.commit('setEventActionDialog', val);
      }
    },
    item: {
      get() {
        return this.$store.state.selectedItem || null;
      },
      set(val) {
        this.$store.commit('setSelectedItem', val);
      }
    }
  },

  methods: {
    onActionSuccess(action) {
      const item = {
        ...this.item
      };

      item.actions[0] = {
        ...item.actions[0],
        action_taken: true,
        comment: action.title,
        date: new Date().toLocaleString()
      };

      this.$store.commit('updateItemStatus', item);
      this.item = item;
    },
    setNoAction() {
      const action = {
        title: 'No Action Needed'
      };

      this.onActionSuccess(action);
    }
  }
};
</script>

<style>
.event-details-wrapper .details-header {
  padding-bottom: 25px;
}
.event-details-wrapper .details-header .title {
  font-size: 30px;
  font-weight: bold;
  color: var(--color-2);
}
.event-details-wrapper .details-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  margin-bottom: 20px;
}
.event-details-wrapper .details-actions .base-button {
  font-size: 14px;
}
.event-details-wrapper .details-content .content-body {
  width: 100%;
  margin-top: 25px;
}
.event-details-wrapper .details-content .content-body .base-image {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
}
@media (min-width: 768px) {
  .event-details-wrapper .details-actions .base-button {
    font-size: 16px;
  }
}
@media (min-width: 1024px) {
  .event-details-wrapper {
    padding: 25px 15px 25px 0;
    order: 2;
  }
  .event-details-wrapper .fixed-wrapper {
    position: fixed;
    width: calc(40% - 15px);
  }
}
@media (min-width: 1360px) {
  .event-details-wrapper .fixed-wrapper {
    position: fixed;
    width: calc(30% - 15px);
  }
}
</style>
