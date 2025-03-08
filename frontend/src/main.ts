/* import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); */

  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideHttpClient } from '@angular/common/http'; // 👈 Agregar esta línea
  import { appConfig } from './app/app.config';
  import { AppComponent } from './app/app.component';
  
  bootstrapApplication(AppComponent, {
    providers: [provideHttpClient(), ...appConfig.providers] // 👈 Agregar provideHttpClient()
  })
    .catch((err) => console.error(err));



