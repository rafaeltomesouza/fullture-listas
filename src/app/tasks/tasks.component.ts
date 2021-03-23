import { Component } from '@angular/core';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
class Tasks {
    titleButton = "Salvar";
    titleButtonList = "Limpar";
    task = "";
    allTasks: Array<string> = [];

    handleTask(event: Event) {
        this.task = (event.target as HTMLInputElement).value;
    }
 
    save(event: Event) {
        if (this.task) {
            event.preventDefault();
            this.allTasks.push(this.task);    
        }
    }

    clear() {
        this.allTasks = [];
    }       
}

export { Tasks }