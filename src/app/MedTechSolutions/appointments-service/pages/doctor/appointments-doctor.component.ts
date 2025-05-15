import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Appointment} from '../../model/appointment';
import {AppointmentsService} from '../../services/appointments.service';
import {DoctorService} from '../../../profiles-service/services/doctor.service';
import {Doctor} from '../../../profiles-service/model/doctor';
import {Patient} from '../../../profiles-service/model/patient';
import {PatientService} from '../../../profiles-service/services/patient.service';
import {AuthenticationService} from '../../../security-service/service/authentication.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments-doctor.component.html',
  styleUrls: ['./appointments-doctor.component.css']
})
export class AppointmentsDoctorComponent implements OnInit, AfterViewInit {

  // Attributes
  doctors: Doctor;
  patients: Patient;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['doctor', 'patient', 'date', 'reason', 'speciality'];
  doctorId: string | null = "";
  patientId: string | null = "";
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;
  isEditMode: boolean;
  constructor(private appointmentsService: AppointmentsService, private doctorService: DoctorService, private patientService: PatientService, private authenticationService: AuthenticationService) {
    this.dataSource = new MatTableDataSource<any>();
    this.isEditMode = false;
    this.doctors = {} as Doctor;
    this.patients = {} as Patient;
  }


 private getDoctorAppointments() {
  this.doctorId = this.authenticationService.getId() ? this.authenticationService.getId() : "";
  if (this.doctorId != null) {
    this.appointmentsService.getByOtherId(parseInt(this.doctorId), "doctorId").subscribe(appointments => {
      console.log('Citas obtenidas:', appointments);

      if (!appointments.length) {
        console.error('No se encontraron citas');
      }

      this.dataSource.data = appointments.map((appointment: any) => {
        return {
          ...appointment,
          doctorName: '',
          patientName: ''
        };
      });

      if (this.doctorId != null) {
        this.doctorService.getProfileById(parseInt(this.doctorId)).subscribe(doctors => {
          this.doctors = doctors;
          console.log('Doctores obtenidos:', doctors);

          this.dataSource.data = this.dataSource.data.map((appointment: any) => {
            return {
              ...appointment,
              doctorName: `${this.doctors.firstName} ${this.doctors.lastName}`
            };
          });
        });
      }

      appointments.forEach((appointment: Appointment) => {
        this.patientService.getProfileById(appointment.patientId).subscribe(patients => {
          this.patients = patients;
          console.log('Pacientes obtenidos:', patients);

          this.dataSource.data = this.dataSource.data.map((appt: any) => {
            if (appt.patientId === appointment.patientId) {
              return {
                ...appt,
                patientName: `${patients.firstName} ${patients.lastName}`
              };
            }
            return appt;
          });
        });
      });
    }, error => {
      console.error('Error al obtener datos:', error);
    });
  }
}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getDoctorAppointments();
  }

}
