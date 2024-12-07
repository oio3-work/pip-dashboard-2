<template>
    <div class="table-wrapper h-screen text-white ">
      <table class="custom-table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column.label }}
            </th>
            <th v-if="actionsSlot">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td v-for="(column, colIndex) in columns" :key="colIndex">
              {{ row[column.field] }}
            </td>
            <td v-if="actionsSlot">
              <slot name="actions" :row="row" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      columns: {
        type: Array,
        required: true,
        default: () => []
      },
      rows: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    computed: {
      actionsSlot() {
        return !!this.$slots.actions;
      }
    }
  };
  </script>
  
  <style scoped>
  .table-wrapper {
    overflow-x: auto;
  }
  .custom-table {
    width: 100%;
    border-collapse: collapse;
  }
  .custom-table th,
  .custom-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  </style>
  