<script setup lang="ts">
import { ref } from 'vue';

import { i18nSubPath } from 'src/utils/common';
import { connectWifi } from 'src/utils/requests';

const i18n = i18nSubPath('pages.HomePage');

const connecting = ref(false);
const ssid = ref('');
const password = ref('');

const connect = async () => {
  connecting.value = true;
  await connectWifi(ssid.value, password.value);
  connecting.value = false;
};
</script>

<template>
  <q-page class="row justify-center q-pa-md-xl q-pa-lg">
    <div class="col-3">
      <q-card>
        <q-card-section>
          <div class="text-h5">
            {{ i18n('labels.connectToWifi') }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-input autofocus :label="i18n('labels.ssid')" outlined v-model="ssid" />
        </q-card-section>
        <q-card-section>
          <q-input
            :autofocus="false"
            :label="i18n('labels.password')"
            outlined
            v-model="password"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            color="primary"
            :label="i18n('labels.connect')"
            :loading="connecting"
            no-caps
            @click="connect"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.rotate-button {
  transform: rotate(1turn);
  transition: 1s;
}

.rotate-button:active {
  transform: rotate(0);
  transition: 0s;
}
</style>
