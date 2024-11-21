import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community'; 
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [AgGridModule],
  template: `
    <ag-grid-angular
      class="ag-theme-quartz"
      style="width: 100%; height: 400px;"
      [rowData]="rowData"
      [columnDefs]="columnDefs">
    </ag-grid-angular>
  `,
  styleUrls: ['./gastos.component.css'],
  templateUrl: './gastos.component.html',
})
export class GastosComponent {
  rowData = [
    { Descripción: 'Nomina', Monto: '10000', IVA: '1600', Total: '11600' },
    { Descripción: 'Alquiler', Monto: '5000', IVA: '800', Total: '5800' },
    { Descripción: 'Cajas', Monto: '3000', IVA: '480',Total: '3480' },
    { Descripción: 'Marketing', Monto: '2000', IVA: '320', Total: '2320' },
    { Descripción: 'Electricidad', Monto: '1200', IVA: '192', Total: '1392' },
    { Descripción: 'Papelería', Monto: '500', IVA: '80', Total: '580' },
    { Descripción: 'Proveedores', Monto: '4000', IVA: '640', Total: '4640' },
    { Descripción: 'Seguros', Monto: '1500', IVA: '240', Total: '1740' },
    { Descripción: 'Consultoria', Monto: '2500', IVA: '400', Total: '2900' },
  ];

  columnDefs: ColDef[] = [
    { field: 'Descripción', headerName: 'Descripción' },
    {
      field: 'Monto',
      valueFormatter: params => `$${params.value.toLocaleString()}`,
      headerName: 'Monto',
    },
    {
      field: 'IVA',
      valueFormatter: params => `$${params.value.toLocaleString()}`,
      headerName: 'IVA 16%',
    },
    {
      field: 'Total',
      valueFormatter: params => `$${params.value.toLocaleString()}`,
      headerName: 'Total',
    },
    {
      headerName: 'WhatsApp',
      cellRenderer: () => {
        return `
          <a href="https://wa.me/8124376244" target="_blank" style="text-decoration: none;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" style="width: 20px; height: 20px;">
          </a>
        `;
      },
      width: 100,
    },
  ];
}
