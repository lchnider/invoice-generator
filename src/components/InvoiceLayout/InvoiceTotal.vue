<template>
  <table>
    <tr align="right">
      <td>{{ $t('subtotal') }}</td>
      <td>{{ currency }} {{ subtotal.toFixed(2) }}</td>
    </tr>
    <tr align="right" class="text-bold">
      <td>{{ $t('total') }}</td>
      <td>{{ currency }} {{ total.toFixed(2) }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    subtotal: Number,
    total: Number,
    currency: String,
  },
};
</script>
