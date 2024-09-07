<template>
  <button class="x-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';

defineOptions({ name: 'x-button' });

type ButtonProps = {
  type?: string;
  size?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`x-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
