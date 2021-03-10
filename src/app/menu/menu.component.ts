import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


type ItemsMenu = {
    name: string,
    url: string,
};

@Component({
    selector: 'main-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
class Menu {
    menu: Array<ItemsMenu> = [
        { name: 'Tarefas', url: '/tasks' },
        { name: 'Contatos', url: '/contacts' },
    ];
    isSelected: string = '';

    constructor(private router: Router) {
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd)
        ).subscribe((e: NavigationEnd) => this.isSelected = e.url)
    }

}

export { Menu };
