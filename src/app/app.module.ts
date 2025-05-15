import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './MedTechSolutions/security-service/pages/sign-in/sign-in.component';
import {SignUpComponent} from './MedTechSolutions/security-service/pages/sign-up/sign-up.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from '@angular/material/sidenav';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIcon} from '@angular/material/icon';
import {provideHttpClient} from '@angular/common/http';
import {PatientTreatmentsComponent} from './MedTechSolutions/treatment-service/pages/patient-treatments/patient-treatments.component';
import {DoctorTreatmentsComponent} from './MedTechSolutions/treatment-service/pages/doctor-treatments/doctor-treatments.component';
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import { HomeComponent } from './public/pages/home/home.component';
import {AppointmentsDoctorComponent} from './MedTechSolutions/appointments-service/pages/doctor/appointments-doctor.component';
import {MatPaginator} from '@angular/material/paginator';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {
  AppointmentsPatientComponent
} from './MedTechSolutions/appointments-service/pages/patients/appointments-patient.component';
import { AddAppointmentComponent } from './MedTechSolutions/appointments-service/components/add-appointment/add-appointment.component';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatDatepicker, MatDatepickerInput, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ExamsDoctorComponent} from './MedTechSolutions/exams-service/pages/doctor/exams-doctor.component';
import {AddExamComponent} from './MedTechSolutions/exams-service/components/add-exam/add-exam.component';
import {UpdateExamComponent} from './MedTechSolutions/exams-service/components/update-exam/update-exam.component';
import {ExamsLaboratoryComponent} from './MedTechSolutions/exams-service/pages/laboratory/exams-laboratory.component';
import { ExamsPatientComponent } from './MedTechSolutions/exams-service/pages/patient/exams-patient.component';
import { UpdateAppointmentComponent } from './MedTechSolutions/appointments-service/components/update-appointment/update-appointment.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { SideNavComponent } from './public/components/side-nav/side-nav.component';
import {NgChartsModule} from 'ng2-charts';
import { MonitoringComponent } from './MedTechSolutions/monitoring-service/monitoring-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PatientTreatmentsComponent,
    DoctorTreatmentsComponent,
    AppointmentsDoctorComponent,
    AppointmentsPatientComponent,
    AddAppointmentComponent,
    ExamsDoctorComponent,
    AddExamComponent,
    ExamsLaboratoryComponent,
    UpdateExamComponent,
    ExamsPatientComponent,
    UpdateAppointmentComponent,
    SideNavComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIcon,
    MatAnchor,
    MatIconButton,
    MatPaginator,
    MatRowDef,
    MatHeaderCellDef,
    MatTable,
    MatCellDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatSort,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatStepper,
    MatStep,
    MatLabel,
    MatFormField,
    MatStepLabel,
    MatButton,
    MatInput,
    MatStepperNext,
    MatStepperPrevious,
    MatDatepickerInput,
    MatDatepicker,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatNativeDateModule,
    MatInputModule,
    NgSelectModule,
    NgChartsModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
