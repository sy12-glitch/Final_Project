import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
<<<<<<< HEAD
// import AppModule  from './sign-up/app.module';
=======
>>>>>>> f37784cd998d33f038063423ccfb446bd8822781
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
