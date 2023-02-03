import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#455363',
  'background-color': '#1f2935',
  'text-color': '#fff'
};

export const normalTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(normalTheme);
  }

  private setTheme(theme: any) {
    console.log(theme)
    Object.keys(theme).forEach((k: any) => {
      console.log(k)
        document.documentElement.style.setProperty(`--${k}`, theme[k])
      }
    );
  }
}
