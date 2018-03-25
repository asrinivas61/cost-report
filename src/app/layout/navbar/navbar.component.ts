import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NavbarService } from './navbar.service';
import { Menu } from './navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['navbar.component.css'],
  providers:[NavbarService]
})
export class NavbarComponent implements OnInit {
  username: string;
  menus: Array<any>=[];
  menuArray: Array<any>=[];
  itemArray: Array<any>=[];
  url: Observable<any>;

  equipList: Array<any>=[];
  equipArray: any;

  constructor(
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    this.loadMenus();
  }
  
  loadMenus(){
    this.navbarService.loadMenu()
          .subscribe(menus=>{
            if(menus.length!=0){
                this.menuArray=menus[0];
                this.equipArray=menus[1];
                for(let data in menus){
                  this.menus.push({
                    name: menus[data].name,
                    items: menus[data].items,
                    submenu: menus[data].submenu,
                    open: false
                  });
                }
            }
    });
  }

  toggleMenu(menu) {
    // this.menus.map(item=>{
    //   item.open=(item.name==menu.name)?true:false;
    // });
    menu.open=!menu.open;
  }

  toggleSubmenu(menuItem) {
    menuItem.open=!menuItem.open;
  }

  toggleSubmenuChild(menuSubItem) {
    menuSubItem.open=!menuSubItem.open;
  }

  menuChecked(e, menu, i) {
    this.menus[0].items.filter(item=>item.name==menu.name)[0]['checked']=e.target.checked;
    this.equipItems(menu);
  }

  submenuChecked(e, submenu, i, j) {
    this.menus[0].items[i].subItems.filter(item=>item.name==submenu.name)[0]['checked']=e.target.checked;
    this.equipItems(submenu);
  }

  heirarchySearch(e, menu) {
    this.menus[0].items.map(item=>{
      if(((item.name).toUpperCase()).search((e.target.value).toUpperCase())>-1) {
        item.open=true;
      } else item.open=false;
      if(item.subItems&&item.subItems.length>0) {
        item.subItems.map(subItem=>{
          if(((subItem.name).toUpperCase()).search((e.target.value).toUpperCase())>-1) {
            item.open=subItem.open=true;
          } else subItem.open=false;
          if(e.target.value=='')
            subItem.open=false;
        })
      }
      if(e.target.value=='')
        item.open=false;
    });
  }

  equipItems(menu) {
    this.equipArray.items.map(item=>{
      if(item.name==menu.name) {
        if(menu.checked) {
          item.subItems.map(sItem=>{
            this.equipList.push(sItem);
          })
        } else {
          this.removeFromArrayIfExistInOther(this.equipList, item.subItems);
        }
        console.log(this.equipList);
      }
    })
  }

  equipSearch(e, menu) {
    console.log(e, menu);
  }

  equipChecked(e, menu) {
    this.equipList.filter(item=>item.name==menu.name)[0]['checked']=e.target.checked;
    console.log(e, menu);
  }

  removeFromArrayIfExistInOther(from, other) {
    for (let i = 0; i < from.length; i++) {
      for (let ii = 0; ii < other.length; ii++) {
        if (from[i]==other[ii]) {
          from.splice(i, 1);
        }
      }
    }
  }
}