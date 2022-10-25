import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, EMPTY} from 'rxjs';
import { Product } from './product.model';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3001/products'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  //o map e o catchError dentro dessa função abaixo é para tratamento de erros
  //Se acontecer algum erro durante a chamada do método POST (nesse caso), ele vai cair no
  //catchError, vai chamar o errorHandler, vai exibir uma mensagem em vermelho escrito que
  //ocorreu um erro e retornar um observable vazio (EMPTY)
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseURL, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Product>{
    const url = `${this.baseURL}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseURL}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Product>{
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}
