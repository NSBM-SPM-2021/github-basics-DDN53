import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';



@Injectable({
  providedIn: 'root'
})
export class StudentService {



  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student:Student): Observable<Object>{
  return this.httpClient.post('http://localhost:8080/api/v1/students',student);
  }
}
