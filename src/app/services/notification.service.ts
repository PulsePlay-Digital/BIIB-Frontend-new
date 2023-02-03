import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    // public snackBar: MatSnackBar
    ) { }

  openSuccessAlert(message: string) {
    Swal.fire({text: message, icon:'success'});
  }
  openWarningAlert(message: string) {
    Swal.fire( {text: message, icon: 'warning'});
  }
  openErrorAlert(message: string) {
    Swal.fire( {text: message, icon: 'error'})
  }


   /**
   * Function to Show success Snackbar
   * @param message 
   * @param action 
   */
   openSuccessSnackBar(message: string, action: string = 'Ok') {
    // this.snackBar.open(message, action, {
    //   duration: 3000,
    //   panelClass: ['#419BD6'],
    //   verticalPosition: 'top',
    //   horizontalPosition: 'end'
    // });
  }

  /**
   * Function to Show Failure snackbar
   * @param message 
   * @param action 
   */
  openFailureSnackBar(message: string, action: string = 'Ok') {
    // this.snackBar.open(message, action, {
    //   duration: 3000,
    //   panelClass: ['red-snackbar'],
    //   verticalPosition: 'top',
    //   horizontalPosition: 'end'
    // });
  }

  openWarningSnackBar(message: string, action: string = 'Ok') {
    // this.snackBar.open(message, action, {
    //   duration: 3000,
    //   panelClass: ['warning-snackbar'],
    //   verticalPosition: 'top',
    //   horizontalPosition: 'end'
    // });
  }

}
