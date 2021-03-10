import { Component, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
class List {
    @Input() titleList = 'Tarefas: ';
    @Input() dataList = ['Teste1', 'Teste2', 'Teste3'];
}

export { List }
