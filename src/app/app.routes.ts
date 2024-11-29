import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { ParentComponent } from './parent/parent.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { DisplaycommentComponent } from './displaycomment/displaycomment.component';

export const routes: Routes = [
    { path: '',  component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'two-way', component: TwoWayDataComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'control', component: ControlFlowComponent},
    {path: 'content', component: ContentParentComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'datatable', component: DatatableComponent},
    {path: 'reactive', component: ReactiveFormComponent},
    {path: 'formgroup', component: FormgroupComponent},
    {path: 'comment', component: DisplaycommentComponent},
];
