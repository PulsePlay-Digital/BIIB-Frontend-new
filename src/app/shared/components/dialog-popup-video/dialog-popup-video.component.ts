import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-popup-video',
  templateUrl: './dialog-popup-video.component.html',
  styleUrls: ['./dialog-popup-video.component.scss']
})
export class DialogPopupVideoComponent implements OnInit {
  constructor(
    public dialogref: MatDialogRef<DialogPopupVideoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialog: MatDialog,
  ) {
    
  }
  ngOnInit(): void {
    
  }
      // var video: any = document.getElementById("myVideo") as HTMLElement;
    // console.log(video)

    // if (video.paused) video.play();
    // else video.pause();
}
