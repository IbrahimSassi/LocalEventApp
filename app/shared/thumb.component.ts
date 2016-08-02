import { Component,OnChanges } from 'angular2/core'

@Component({
    selector: 'acw-thumb',
    templateUrl: 'app/shared/thumb.component.html',
    stylesUrls: ['app/shared/thumbs.component.css']
})

export class ThumbComponent {
    rating: number=4;
    thumbsWidth: number;
    ngOnChanges(): void{
        this.thumbsWidth = this.rating *86 /5;
    }
    
}