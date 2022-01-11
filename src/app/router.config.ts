import { Routes } from '@angular/router';
import { BackgroundComponent } from './pages/background/background.component';
import { JewelsModule } from './pages/jewels/jewels.module';
import { SearchComponent } from './pages/search/search.component';
import { ShirtModule } from './pages/shirt/shirt.module';
import { ShoeModule } from './pages/shoe/shoe.module';
import { TrousersModule } from './pages/trousers/trousers.module';

//defaut routes config
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) },
  { path: 'shoes', loadChildren: () => ShoeModule },
  { path: 'shirt', loadChildren: () => ShirtModule },
  { path: 'trousers', loadChildren: () => TrousersModule },
  { path: 'jewels', loadChildren: () => JewelsModule },
  { path: 'background', component: BackgroundComponent },
  { path: 'search', component: SearchComponent },
];

//routes config fetch database
//fix name same module created in table category
//module you created follow name
// export const lstRoutes: RoutesConfig[] = [
//   { name: 'ShoeModule', module: ShoeModule },
//   { name: 'ShirtModule', module: ShirtModule },
//   { name: 'TrousersModule', module: TrousersModule },
//   { name: 'JewelsModule', module: JewelsModule },
// ];
