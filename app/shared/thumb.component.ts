import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'acw-thumb',
    templateUrl: 'app/shared/thumbs.component.html',
    stylesUrls: ['app/shared/thumbs.component.css']
})

export class ThumbComponent {
    @Input() rating: number;
    thumbsWidth: number;
    @Output() ratingClicked: EventEmitter<string>
        new EventEmitter<string>();
    
    ngOnChanges(): void{
        this.thumbsWidth = this.rating *86 /5;
    }
    
}