<template>
  <table>
    <thead>
      <tr class="text-capitalize">
        <th align="center" class="no_print">#</th>
        <th align="left">{{ $t('description') }}</th>
        <th align="right">{{ $t('unit_price') }}</th>
        <th align="right">{{ $t('quantity') }}</th>
        <th align="right">{{ $t('amount') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td align="center" style="width: 50px" class="no_print">
          <q-btn icon="clear" @click="$emit('deleteItem', index)" dense flat />
        </td>
        <td>
          <div v-html="item.description" class="editable" />
          <q-popup-edit v-model="item.description" auto-save v-slot="scope">
            <q-editor
              v-model="scope.value"
              min-height="5rem"
              flat
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify'],
                  },
                ],
                [
                  'bold',
                  'italic',
                  'strike',
                  'underline',
                  'subscript',
                  'superscript',
                ],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                ['undo', 'redo'],
                ['viewsource'],
              ]"
            />
          </q-popup-edit>
        </td>
        <td align="right">
          <span class="editable">
            {{ currency }} {{ item.unitPrice.toFixed(2) }}
            <q-popup-edit v-model="item.unitPrice" auto-save v-slot="scope">
              <q-input
                v-model.number="scope.value"
                dense
                borderless
                type="number"
                :prefix="currency"
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </span>
        </td>
        <td align="right" class="q-gutter-x-xs">
          <span class="editable">
            {{ item.quantity }}
            <q-popup-edit v-model="item.quantity" auto-save v-slot="scope">
              <q-input
                v-model.number="scope.value"
                dense
                autofocus
                borderless
                type="number"
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </span>
          <span class="editable">
            <span v-if="item.unit">
              {{ item.unit }}
            </span>
            <span v-else class="no_print text-grey">(unit)</span>
            <q-popup-edit v-model="item.unit" auto-save v-slot="scope">
              <q-input
                v-model="scope.value"
                dense
                autofocus
                borderless
                type="text"
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </span>
        </td>
        <td align="right">
          {{ currency }} {{ (item.unitPrice * item.quantity).toFixed(2) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: Array,
    currency: String,
  },
  emits: ['deleteItem'],
};
</script>
