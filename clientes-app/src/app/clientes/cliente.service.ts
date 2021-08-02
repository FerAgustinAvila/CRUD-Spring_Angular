import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:9095/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
      private http: HttpClient,
      private router: Router
    ) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);

    // return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      // tap 
      tap( response => {
        let clientes = response as Cliente[];
        console.log('ClienteService - tap 1');
        
        clientes.forEach( cliente => {
          console.log(cliente);
        });
      }),
      // map( function(response) { return response as Cliente[]}) 
      map( response => {
        let clientes = response as Cliente[];
        return clientes.map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          let datePipe = new DatePipe('en-US');
          // cliente.createAt = datePipe.transform(cliente.createAt, 'dd/MM/yyyy')
          cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyyy', 'en-US')
          return cliente;
        });
      }),
      tap( response => {
        console.log('ClienteService - tap 2');
        response.forEach( cliente => {
          console.log(cliente);
        });
      })
      
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente, { headers: this.httpHeaders }).pipe(
      map( (response: any) => response.cliente as Cliente),
      catchError( e => {

        if( e.status === 400 ) {
          return throwError(e);
        }

        // this.router.navigate(['/clientes'])
        console.error(e.error.mensaje);        
        swal.fire('Error al crear al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  // ANY
  // create(cliente: Cliente): Observable<any> {
  //   return this.http.post<any>(this.urlEndPoint, cliente, { headers: this.httpHeaders })

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes'])
        console.error(e.error.mensaje);        
        swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders }).pipe(
      catchError( e => {

        if( e.status === 400 ) {
          return throwError(e);
        }

        // this.router.navigate(['/clientes'])
        console.error(e.error.mensaje);        
        swal.fire('Error al editar al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        // this.router.navigate(['/clientes'])
        console.error(e.error.mensaje);        
        swal.fire('Error al eliminar al cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }
  
}
