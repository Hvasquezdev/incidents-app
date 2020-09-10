<template>
  <base-dialog
    :success="success"
    :error="error"
    :loading="loading"
    rounded
    close
    :class="classNames"
    class="event-action-dialog"
    @close="$emit('close')"
  >
    <base-tab :items="tabs" :active="activeTab" size="lg" center />

    <ul v-if="activeTab === 1" class="action-list">
      <li v-for="action in actions" :key="action.id">
        <event-action-card
          :action="action"
          :selected="selectedAction"
          color="grey"
          shadow
          @select="onSelectAction"
        />
      </li>
    </ul>

    <div v-else class="action-form">
      <event-action-card :action="selectedAction" />

      <base-textarea
        v-model="actionMessage"
        placeholder="Enter resolution detail..."
        label="Resolution Detail*"
        rows="10"
      />
    </div>

    <div class="action-buttons">
      <base-button
        v-if="activeTab === 1"
        :disabled="!selectedAction"
        @click="onNextStep"
        class="next-button"
        color="success"
        shadow
      >
        Next
      </base-button>

      <base-button
        v-if="activeTab === 2"
        @click="onPreviousStep"
        class="back-button"
        shadow
      >
        Back
      </base-button>
      <base-button
        v-if="activeTab === 2"
        @click="onSubmit"
        class="submit-button"
        color="success"
        shadow
      >
        Take action
      </base-button>
    </div>
  </base-dialog>
</template>

<script>
import BaseDialog from '@/components/BaseDialog';
import BaseTab from '@/components/BaseTab';
import BaseButton from '@/components/BaseButton';
import BaseTextarea from '@/components/BaseTextarea';
import EventActionCard from '@/components/EventActionCard';

export default {
  name: 'EventActionDialog',

  components: {
    BaseDialog,
    BaseTab,
    BaseButton,
    BaseTextarea,
    EventActionCard
  },

  data() {
    return {
      activeTab: 1,
      actionMessage: null,
      tabs: [
        {
          id: 1,
          text: 'Select Action',
          step: 1
        },
        {
          id: 2,
          text: 'Take Action',
          step: 2
        }
      ],
      selectedAction: null,
      actions: [
        {
          id: 1,
          title: 'Mark as resolved',
          description:
            'Mark this event as resolved and enter the details of the resolution.'
        },
        {
          id: 2,
          title: 'Change asset',
          description: 'Change the asset with another one.'
        }
      ],
      loading: false,
      success: false,
      error: false
    };
  },

  computed: {
    classNames() {
      return {
        'is-success': this.success,
        'is-error': this.error,
        'is-loading': this.loading
      };
    }
  },

  methods: {
    onSelectAction(action) {
      if (this.selectedAction && this.selectedAction.id === action.id) {
        this.selectedAction = null;
      } else {
        this.selectedAction = action;
      }
    },
    onNextStep() {
      const totalSteps = this.tabs.length;
      const currentStep = this.tabs.find(tab => tab.step === this.activeTab);
      const currentStepIndex = this.tabs.indexOf(currentStep);

      if (
        this.activeTab === this.tabs[totalSteps - 1].step ||
        !this.selectedAction
      ) {
        return;
      }

      this.activeTab = this.tabs[currentStepIndex + 1].step;
    },
    onPreviousStep() {
      const currentStep = this.tabs.find(tab => tab.step === this.activeTab);
      const currentStepIndex = this.tabs.indexOf(currentStep);

      if (!this.tabs[currentStepIndex - 1]) {
        return;
      }

      this.activeTab = this.tabs[currentStepIndex - 1].step;
    },
    onSubmit() {
      this.loading = true;
      this.error = false;
      this.success = false;

      const submitTimeout = setTimeout(() => {
        if (!this.actionMessage) {
          this.error = true;
        } else {
          this.success = true;
          this.$emit('success', this.selectedAction);
        }

        this.loading = false;
        clearTimeout(submitTimeout);
      }, 2000);
    }
  }
};
</script>

<style>
.event-action-dialog .dialog-content {
  width: 90%;
  max-width: 800px;
  padding: 15px 35px 35px 35px;
  display: flex;
  flex-direction: column;
}
.event-action-dialog .dialog-content .base-tab {
  border-color: var(--color-2);
  margin-bottom: 25px;
}
.event-action-dialog .dialog-content .base-tab li {
  cursor: auto;
  font-size: 12px;
}
.event-action-dialog .dialog-content .base-tab li:not(:last-child) {
  margin-right: 15px;
}
.event-action-dialog .dialog-content .action-list {
  margin-bottom: 30px;
}
.event-action-dialog .dialog-content .action-list > *:not(:last-child) {
  margin-bottom: 15px;
}
.event-action-dialog .dialog-content .action-form {
  margin-bottom: 35px;
  display: grid;
  grid-template-columns: 1fr;
}
.event-action-dialog .dialog-content .action-form .event-action-card {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 15px;
}
.event-action-dialog .dialog-content .action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.event-action-dialog .dialog-content .action-buttons .base-button {
  display: block;
  min-width: 120px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 14px;
}
.event-action-dialog
  .dialog-content
  .action-buttons
  .base-button:not(:last-child) {
  margin-right: 15px;
}
.event-action-dialog .dialog-content .action-buttons .base-button.next-button {
  margin: 0;
}
.event-action-dialog.is-loading .dialog-content,
.event-action-dialog.is-error .dialog-content,
.event-action-dialog.is-success .dialog-content {
  max-width: 515px;
  padding: 15px 35px 35px 35px;
}
@media (min-width: 768px) {
  .event-action-dialog .dialog-content .base-tab li:not(:last-child) {
    margin-right: 65px;
  }
  .event-action-dialog .dialog-content .action-buttons .base-button {
    font-size: 16px;
  }
  .event-action-dialog .dialog-content .base-tab li {
    font-size: 19px;
  }
}
</style>
