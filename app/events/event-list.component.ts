import { Component, OnInit } from 'angular2/core';
import { IEvent } from './event';
import { EventFilterPipe } from './event-filter.pipe';
import { ThumbComponent } from '../shared/thumb.component';
import { EventService } from './event.service';

@Component({
    selector: 'el-events',
    templateUrl :'app/events/event-list.component.html',
    styleUrls: ['app/events/event-list.component.css'],
    pipes: [EventFilterPipe],
    directives:[ThumbComponent]
})



export class EventListComponent implements OnInit{
    
    eventsImg: boolean= true;
    pageTitle: string = " ** Event List ** ";
    imageWidth: number = 100;
    imageMargin: number = 2;
    searchCriteria: string= 'Event';
    
    
    events: IEvent[] ;

    constructor(private _eventService: EventService){
    }




    toogleImages(): void {
        this.eventsImg = !this.eventsImg;
    }
    
    ngOnInit(): void{
        console.log('In OnInit');
        this.events= this._eventService.getEvents();

    }
    
    onRatingClicked(message: string): void{
        this.pageTitle = 'Event List ' + message ;
    }
    
    
    


    
}