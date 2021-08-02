import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  // clientes: Cliente[] = [
  //   {
  //     id: 1,
  //     nombre: 'Fernando',
  //     apellido: 'Avila',
  //     createAt: '2021-05-24',
  //     email: 'ferdev@hotmail.com'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Ross',
  //     apellido: 'Torres',
  //     createAt: '2021-04-03',
  //     email: 'rosstorres@hotmail.com'
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Agus',
  //     apellido: 'Gomez',
  //     createAt: '2021-06-13',
  //     email: 'agusgomez@hotmail.com'
  //   },
  //   {
  //     id: 4,
  //     nombre: 'Luzila',
  //     apellido: 'Paz',
  //     createAt: '2021-06-17',
  //     email: 'luzpaz@hotmail.com'
  //   },
  //   {
  //     id: 5,
  //     nombre: 'Glady',
  //     apellido: 'Gomez',
  //     createAt: '2021-06-14',
  //     email: 'gladygomez@hotmail.com'
  //   },
  //   {
  //     id: 6,
  //     nombre: 'Noemi',
  //     apellido: 'Gusti',
  //     createAt: '2021-01-31',
  //     email: 'noemigusti@hotmail.com'
  //   },
  //   {
  //     id: 7,
  //     nombre: 'Jesi',
  //     apellido: 'Avila',
  //     createAt: '2021-06-24',
  //     email: 'ferdev@hotmail.com'
  //   },
  //   {
  //     id: 8,
  //     nombre: 'Jeanette',
  //     apellido: 'Gomez',
  //     createAt: '2021-06-24',
  //     email: 'jegomez@hotmail.com'
  //   },
  //   {
  //     id: 9,
  //     nombre: 'Juan',
  //     apellido: 'Berella',
  //     createAt: '2021-06-24',
  //     email: 'juanber@hotmail.com'
  //   },
  //   {
  //     id: 10,
  //     nombre: 'Lucas',
  //     apellido: 'Conci',
  //     createAt: '2021-06-24',
  //     email: 'lucasconci@hotmail.com'
  //   },
  //   {
  //     id: 11,
  //     nombre: 'Maxi',
  //     apellido: 'Caceres',
  //     createAt: '2021-10-12',
  //     email: 'maxcace@hotmail.com'
  //   },
  //   {
  //     id: 12,
  //     nombre: 'Gaston',
  //     apellido: 'Nieva',
  //     createAt: '2021-02-24',
  //     email: 'gastieva@hotmail.com'
  //   },
  //   {
  //     id: 13,
  //     nombre: 'Rodrigo',
  //     apellido: 'Nader',
  //     createAt: '2021-06-24',
  //     email: 'roder@hotmail.com'
  //   },
  //   {
  //     id: 14,
  //     nombre: 'Marcos',
  //     apellido: 'Navarro',
  //     createAt: '2021-05-14',
  //     email: 'marro@hotmail.com'
  //   },
  //   {
  //     id: 15,
  //     nombre: 'Ariel',
  //     apellido: 'Fanloo',
  //     createAt: '2021-06-01',
  //     email: 'arieloo@hotmail.com'
  //   },
  //   {
  //     id: 16,
  //     nombre: 'Nehuen',
  //     apellido: 'Cabrera',
  //     createAt: '2021-01-22',
  //     email: 'nera@hotmail.com'
  //   },
  //   {
  //     id: 17,
  //     nombre: 'Cristian',
  //     apellido: 'Barrionuevo',
  //     createAt: '2021-02-24',
  //     email: 'cristevo@hotmail.com'
  //   },
  // ];

  // clientes: Cliente[] = [
  //   {
  //     id: 1,
  //     nombre: 'Fernando',
  //     apellido: 'Avila',
  //     createAt: '2021-05-24',
  //     email: 'ferdev@hotmail.com'
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Ross',
  //     apellido: 'Torres',
  //     createAt: '2021-04-03',
  //     email: 'rosstorres@hotmail.com'
  //   },
  //   {
  //     id: 3,
  //     nombre: 'Agus',
  //     apellido: 'Gomez',
  //     createAt: '2021-06-13',
  //     email: 'agusgomez@hotmail.com'
  //   },
  //   {
  //     id: 4,
  //     nombre: 'Luzila',
  //     apellido: 'Paz',
  //     createAt: '2021-06-17',
  //     email: 'luzpaz@hotmail.com'
  //   },
  //   {
  //     id: 5,
  //     nombre: 'Glady',
  //     apellido: 'Gomez',
  //     createAt: '2021-06-14',
  //     email: 'gladygomez@hotmail.com'
  //   },
  //   {
  //     id: 6,
  //     nombre: 'Noemi',
  //     apellido: 'Gusti',
  //     createAt: '2021-01-31',
  //     email: 'noemigusti@hotmail.com'
  //   },
  //   {
  //     id: 7,
  //     nombre: 'Jesi',
  //     apellido: 'Avila',
  //     createAt: '2021-06-24',
  //     email: 'ferdev@hotmail.com'
  //   },
  //   {
  //     id: 8,
  //     nombre: 'Jeanette',
  //     apellido: 'Gomez',
  //     createAt: '2021-06-24',
  //     email: 'jegomez@hotmail.com'
  //   },
  //   {
  //     id: 9,
  //     nombre: 'Juan',
  //     apellido: 'Berella',
  //     createAt: '2021-06-24',
  //     email: 'juanber@hotmail.com'
  //   },
  //   {
  //     id: 10,
  //     nombre: 'Lucas',
  //     apellido: 'Conci',
  //     createAt: '2021-06-24',
  //     email: 'lucasconci@hotmail.com'
  //   },
  //   {
  //     id: 11,
  //     nombre: 'Maxi',
  //     apellido: 'Caceres',
  //     createAt: '2021-10-12',
  //     email: 'maxcace@hotmail.com'
  //   },
  //   {
  //     id: 12,
  //     nombre: 'Gaston',
  //     apellido: 'Nieva',
  //     createAt: '2021-02-24',
  //     email: 'gastieva@hotmail.com'
  //   },
  //   {
  //     id: 13,
  //     nombre: 'Rodrigo',
  //     apellido: 'Nader',
  //     createAt: '2021-06-24',
  //     email: 'roder@hotmail.com'
  //   },
  //   {
  //     id: 14,
  //     nombre: 'Marcos',
  //     apellido: 'Navarro',
  //     createAt: '2021-05-14',
  //     email: 'marro@hotmail.com'
  //   },
  //   {
  //     id: 15,
  //     nombre: 'Ariel',
  //     apellido: 'Fanloo',
  //     createAt: '2021-06-01',
  //     email: 'arieloo@hotmail.com'
  //   },
  //   {
  //     id: 16,
  //     nombre: 'Nehuen',
  //     apellido: 'Cabrera',
  //     createAt: '2021-01-22',
  //     email: 'nera@hotmail.com'
  //   },
  //   {
  //     id: 17,
  //     nombre: 'Cristian',
  //     apellido: 'Barrionuevo',
  //     createAt: '2021-02-24',
  //     email: 'cristevo@hotmail.com'
  //   },
  // ];
  
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
     this.clienteService.getClientes().pipe(
       tap(clientes => {
         this.clientes = clientes
        console.log('ClientesComponent - tap 3');
        clientes.forEach( cliente => {
          console.log(cliente);
        });
       })
     )
     .subscribe(
        clientes => this.clientes = clientes
      );
  }

  delete(cliente: Cliente): void {
    swal.fire({
      title: 'Seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente);
            swal.fire(
              'Cliente eliminado!',
              'Cliente ${cliente.nombre} eliminado con éxito',
              'success'
            )
          }
        );
        
      }
    })
  }

}
