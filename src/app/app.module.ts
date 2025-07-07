import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';

// Otras librerías
import { NgSelectModule } from '@ng-select/ng-select';
import { NgChartsModule } from 'ng2-charts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// Tus componentes
import { SignInComponent } from './MedTechSolutions/security-service/pages/sign-in/sign-in.component';
import { SignUpComponent } from './MedTechSolutions/security-service/pages/sign-up/sign-up.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PatientTreatmentsComponent } from './MedTechSolutions/treatment-service/pages/patient-treatments/patient-treatments.component';
import { DoctorTreatmentsComponent } from './MedTechSolutions/treatment-service/pages/doctor-treatments/doctor-treatments.component';
import { AppointmentsDoctorComponent } from './MedTechSolutions/appointments-service/pages/doctor/appointments-doctor.component';
import { AppointmentsPatientComponent } from './MedTechSolutions/appointments-service/pages/patients/appointments-patient.component';
import { AddAppointmentComponent } from './MedTechSolutions/appointments-service/components/add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './MedTechSolutions/appointments-service/components/update-appointment/update-appointment.component';
import { ExamsDoctorComponent } from './MedTechSolutions/exams-service/pages/doctor/exams-doctor.component';
import { AddExamComponent } from './MedTechSolutions/exams-service/components/add-exam/add-exam.component';
import { UpdateExamComponent } from './MedTechSolutions/exams-service/components/update-exam/update-exam.component';
import { ExamsLaboratoryComponent } from './MedTechSolutions/exams-service/pages/laboratory/exams-laboratory.component';
import { ExamsPatientComponent } from './MedTechSolutions/exams-service/pages/patient/exams-patient.component';
import { SideNavComponent } from './public/components/side-nav/side-nav.component';
import { MonitoringComponent } from './MedTechSolutions/monitoring-service/components/monitoring-service.component';

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
    UpdateAppointmentComponent,
    ExamsDoctorComponent,
    AddExamComponent,
    UpdateExamComponent,
    ExamsLaboratoryComponent,
    ExamsPatientComponent,
    SideNavComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    NgSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule
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
