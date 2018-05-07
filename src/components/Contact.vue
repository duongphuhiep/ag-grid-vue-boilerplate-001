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
        defaultColDef: {
          enableValue: true,
          enableRowGroup: true,
          enablePivot: true,
        },
        enableSorting: true,
        showToolPanel: true,
        enableFilter: true,
        showToolPanel: true,
        floatingFilter: true,

        editType: 'fullRow',
        columnDefs: [
          {
            headerName: 'Id',
            field: 'id',
            editable: false,
            filter: 'agNumberColumnFilter',
          },
          {
            headerName: 'Name',
            field: 'name',
            editable: true,
            filter: 'agTextColumnFilter',
          },
          {
            headerName: 'Email',
            field: 'email',
            editable: true,
            filter: 'agTextColumnFilter',
          },
          {
            headerName: 'Phone',
            field: 'phone',
            editable: true,
            filter: 'agTextColumnFilter',
          },
          {
            headerName: 'City',
            field: 'city',
            editable: true,
            filter: 'agSetColumnFilter',
            //rowGroup: true,
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
    this.gridOptions.api.setRowData([
      {
        id: '1',
        name: 'hiep',
        email: 'hiep@email.com',
        phone: '012345678',
        city: 'Ha Noi',
      },
      {
        id: '2',
        name: 'linh',
        email: 'linh@email.com',
        phone: '012345679',
        city: 'Ha Noi',
      },
      {
        id: '3',
        name: 'nhu',
        email: 'nhu@email.com',
        phone: '012345689',
        city: 'Da Nang',
      },
      {
        id: '4',
        name: 'nga',
        email: 'nga@email.com',
        phone: '012375689',
        city: 'Nam Dinh',
      },
    ]);
    this.gridOptions.api.sizeColumnsToFit();

    // axios
    //   .get(this.$store.state.apiUrl + '/api/contact')
    //   .then(response => {
    //     let res = response.data;
    //     this.gridOptions.api.setRowData(res);
    //     this.gridOptions.api.sizeColumnsToFit();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
};
</script>
