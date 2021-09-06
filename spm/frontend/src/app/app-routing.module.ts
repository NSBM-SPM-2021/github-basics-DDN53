import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'students',component:StudentListComponent},
  {path:'create-student' , component: CreateStudentComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'',redirectTo:'students',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }