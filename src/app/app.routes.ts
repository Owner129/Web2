import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MailboxComponent} from './mailbox/mailbox.component';
import {CalendarComponent} from './calendar/calendar.component';
import {PagesComponent} from './pages/pages.component';
import {AppsComponent} from './apps/apps.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'apps', component: AppsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
