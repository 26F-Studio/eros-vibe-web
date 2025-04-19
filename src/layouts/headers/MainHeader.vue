<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { bus } from 'boot/bus';
import { useSettingsStore } from 'stores/settings';
import { i18nSubPath } from 'utils/common';

const { toggleDarkMode } = useSettingsStore();
const { darkModeColorAndIcon } = storeToRefs(useSettingsStore());

const i18n = i18nSubPath('layouts.headers.MainHeader');
</script>

<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn
        dense
        flat
        icon="menu"
        round
        @click="bus.emit('drawer', 'toggle', 'left')"
      />
      <q-toolbar-title>
        <q-avatar>
          <q-img src="favicon.ico" />
        </q-avatar>
      </q-toolbar-title>
      <q-btn
        :icon="darkModeColorAndIcon.icon"
        :text-color="darkModeColorAndIcon.color"
        flat
        round
        @click="toggleDarkMode"
      >
        <q-tooltip>
          {{ i18n('labels.toggleDarkMode') }}
        </q-tooltip>
      </q-btn>
      <q-btn
        dense
        flat
        icon="menu"
        round
        @click="bus.emit('drawer', 'toggle', 'right')"
      />
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
