import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';// by default .ts file extension


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
