import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-personal',
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
  styleUrls: ['./personal.component.css'],
  templateUrl: './personal.component.html',
})
export class PersonalComponent {
  rowData = [
    { Id: '1', Nombre: 'Angela Govea', Edad: 26, Ocupación: 'Gerente', Sueldo: 15000  },
    { Id: '2', Nombre: 'Gael Flores', Edad: 28, Ocupación: 'Encargado del Marketing', Sueldo: 10000  },
    { Id: '3', Nombre: 'Paloma Rodriguez', Edad: 25, Ocupación: 'Vendedora', Sueldo: 7000  },
    { Id: '4', Nombre: 'Azahel Medrano', Edad: 23, Ocupación: 'Cajero', Sueldo: 9000  },
    { Id: '5', Nombre: 'Byron Cuevas', Edad: 24, Ocupación: 'Encargado del Inventario', Sueldo: 12000  },
    { Id: '6', Nombre: 'Emma Espejo', Edad: 26, Ocupación: 'Limpieza', Sueldo: 8000  },
    { Id: '7', Nombre: 'Sebastian Lopez', Edad: 29, Ocupación: 'Asistente del Gerente', Sueldo: 11000  },
    { Id: '8', Nombre: 'Sofia Valladares', Edad: 22, Ocupación: 'Encargado de compras', Sueldo: 12000  },
    { Id: '9', Nombre: 'Estefania Hernandez', Edad: 20, Ocupación: 'Diseñadora', Sueldo: 11000  },
    { Id: '10', Nombre: 'Sebastian Azpeytia', Edad: 24, Ocupación: 'Vendedor', Sueldo: 7000  },
  ];

  columnDefs: ColDef[] = [
    { field: 'Nombre', headerName: 'Nombre' },
    { field: 'Ocupación', headerName: 'Ocupación' },
    {
      field: 'Sueldo',
      valueFormatter: params => `$${params.value.toLocaleString()}`,
      headerName: 'Sueldo',
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

