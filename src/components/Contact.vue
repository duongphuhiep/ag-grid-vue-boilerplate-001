<template>
  <div>
    <AgGridVue
      :grid-options = "gridOptions"
      class="ag-theme-balham"
      style="width:100%;height:500px"
    />
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import axios from 'axios';

export default {
  components: {
    AgGridVue,
  },
  data() {
    let $this = this;
    return {
      gridOptions: {
        editType: 'fullRow',
        columnDefs: [
          { headerName: 'Id', field: 'id', editable: false },
          {
            headerName: 'Name',
            field: 'name',
            editable: true,
          },
          {
            headerName: 'Email',
            field: 'email',
            editable: true,
          },
          {
            headerName: 'Phone',
            field: 'phone',
            editable: true,
          },
        ],
        // onCellEditingStopped(e) {
        //   console.log('onCellEditingStopped ', e);
        // },
        onRowEditingStopped(e) {
          console.log(
            'SEND POST to ' + $this.$store.state.apiUrl + '/api/contact',
            e.data
          );
          axios
            .post($this.$store.state.apiUrl + '/api/contact', e.data)
            .then(response => {
              let res = response.data;
              console.log('onRowEditingStopped', res);
              if (!res.ok) {
                //undo edit
                e.api.refreshCells();
              }
            })
            .catch(error => {
              //undo edit
              console.error('onRowEditingStopped', error);
              e.api.refreshCells();
            });
        },
      },
    };
  },
  mounted() {
    axios
      .get(this.$store.state.apiUrl + '/api/contact')
      .then(response => {
        let res = response.data;
        this.gridOptions.api.setRowData(res);
        this.gridOptions.api.sizeColumnsToFit();
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
