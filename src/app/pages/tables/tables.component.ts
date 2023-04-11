import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Student {
  id: number;
  name: string;
  last_name: string;
  register_date: Date;
  email: string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {

  students: Student[] = [
    {
      id: 1,
      name: 'Andrea',
      last_name:'Vitale Diez',
      register_date: new Date(),
      email: 'andruvit@gmail.com'
    },
    {
      id: 2,
      name: 'Alejandro',
      last_name: 'Serrano',
      register_date: new Date(),
      email: 'alejserrano@gmail.com'
    },
    {
      id: 3,
      name: 'Juan Pablo',
      last_name: 'Acosta Sabatini',
      register_date: new Date(),
      email: 'acostasabatini@yahoo.com.ar'
    },
    {
      id: 4,
      name: 'Patricio',
      last_name: 'Perez Di Santi',
      register_date: new Date(),
      email: 'patodisanti@hotmail.com'
    },
    {
      id: 5,
      name: 'Agustin',
      last_name: 'Ryan',
      register_date: new Date(),
      email: 'agustin_ryan_rod@yahoo.com.ar'
    },
    {
      id: 6,
      name: 'Adriana',
      last_name: 'Binda',
      register_date: new Date(),
      email: 'abinda@outlook.com'
    }
  ];

  displayedColumns: string[] = ['id', 'name', 'last_name', 'completeName', 'register_date', 'email'];
  
  dataSource = new MatTableDataSource(this.students);

  applyFilter(ev: Event): void {
    
    const inputValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = inputValue.trim().toLowerCase();

    console.log(this.dataSource.filter);  }
    

}
