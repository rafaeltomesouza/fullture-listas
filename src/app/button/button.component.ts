import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'button-action',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
class Button {
    @Input() titleButton = '';
    @Output('buttonEvent') actionToDispatch = new EventEmitter();

    action(click:Event) {
        this.actionToDispatch.emit();
    }
}

export { Button }