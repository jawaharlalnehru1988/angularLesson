import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { ParentComponent } from './parent/parent.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { TeacherComponent } from './teacher/teacher.component';

export const routes: Routes = [
    { path: '',  component: HomeComponent},
    {path: 'event', component: EventComponent},
    {path: 'two-way', component: TwoWayDataComponent},
    {path: 'parent', component: ParentComponent},
    {path: 'control', component: ControlFlowComponent},
    {path: 'content', component: ContentParentComponent},
    {path: 'teacher', component: TeacherComponent}
];
