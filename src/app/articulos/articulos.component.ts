import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community'; 
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-articulos',
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
  styleUrls: ['./articulos.component.css'],
  templateUrl: './articulos.component.html',
})
export class ArticulosComponent {
  rowData = [
    { Perfume: 'Cloud', Cantidad: '100ml', Precio: 1900, Entrega: true, Sucursal: 'Monterrey' },
    { Perfume: 'Thanks u next', Cantidad: '50ml', Precio: 700, Entrega: false, Sucursal: 'Escobedo' },
    { Perfume: 'Miss Dior', Cantidad: '50ml', Precio: 1000, Entrega: true, Sucursal: 'Apodaca' },
    { Perfume: 'Ari', Cantidad: '100ml', Precio: 1380, Entrega: true, Sucursal: 'San Nicolas' },
    { Perfume: 'Sweet Like Candy', Cantidad: '100ml', Precio: 929, Entrega: true, Sucursal: 'Guadalupe' },
    { Perfume: 'Moonlight', Cantidad: '50ml', Precio: 673, Entrega: false, Sucursal: 'Apodaca' },
    { Perfume: 'Mod Vanilla', Cantidad: '50ml', Precio: 799, Entrega: false, Sucursal: 'Apodaca' },
    { Perfume: 'Meow!', Cantidad: '100ml', Precio: 1490, Entrega: true, Sucursal: 'Monterrey' },
    { Perfume: 'Burberry Her', Cantidad: '100ml', Precio: 3700, Entrega: true, Sucursal: 'Monterrey' },
    { Perfume: 'Dioni', Cantidad: '50ml', Precio: 500, Entrega: false, Sucursal: 'San Nicolas' },
  ];

  columnDefs: ColDef[] = [
    {
      valueGetter: params => `${params.data.Perfume} - $${params.data.Precio}`,
      headerName: 'Descripción',
    },
    { field: 'Perfume', headerName: 'Perfume' },
    { field: 'Cantidad', headerName: 'Cantidad' },
    { field: 'Sucursal', headerName: 'Sucursal' },
    {
      field: 'Precio',
      valueFormatter: params => `$${params.value.toLocaleString()}`,
      headerName: 'Precio',
    },
    { field: 'Entrega', headerName: 'Entrega a Domicilio' },
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
